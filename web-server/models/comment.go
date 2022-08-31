package models

import (
	"fmt"
	"time"

	"github.com/go-pg/pg/v10"
)

type Comment struct {
	tableName struct{} `pg:"comments,alias:p"`
	Id        int
	ProductId int
	UserID    int
	UserType  string
	Media     []string `pg:",array"`
	Content   string
	CreatedAt time.Time `pg:"default:now()"`
	UpdatedAt time.Time
}

func CreateCommentIndex(db *pg.DB) error {
	_, err := db.Exec(fmt.Sprintf("CREATE INDEX IF NOT EXISTS %s_created_at ON %s (created_at)", "comments", "comments"))

	return err
}
