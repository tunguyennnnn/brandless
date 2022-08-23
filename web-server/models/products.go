package models

import (
	"fmt"
	"time"

	"github.com/go-pg/pg/v10"
)

type Product struct {
	tableName   struct{} `pg:"products,alias:p"`
	Id          int
	ProductId   string
	Name        string
	Description string
	Images      []string `pg:",array"`
	BrandId     int
	Link        string
	CreatedAt   time.Time `pg:"default:now()"`
	UpdatedAt   time.Time
}

func CreateProductIndex(db *pg.DB) error {
	_, err := db.Exec(fmt.Sprintf("CREATE INDEX IF NOT EXISTS %s_created_at ON %s (created_at)", "products", "products"))

	return err
}
