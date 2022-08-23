package models

import (
	"fmt"
	"time"

	"github.com/go-pg/pg/v10"
)

type Brand struct {
	tableName struct{} `pg:"brands,alias:b"`
	Id        int
	Name      string
	Logo      string
	CreatedAt time.Time `pg:"default:now()"`
}

func CreateBrandIndex(db *pg.DB) error {
	_, err := db.Exec(fmt.Sprintf("CREATE UNIQUE INDEX IF NOT EXISTS %s_name ON %s (name)", "brands", "brands"))

	return err
}
