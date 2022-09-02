package models

import (
	"github.com/go-pg/pg/v10"
)

type Review struct {
	tableName struct{} `pg:"reviews,alias:p"`
	Id        int
	ProductId string
}

func CreateReviewIndex(db *pg.DB) error {

	return nil
}
