package models

import "time"

type Product struct {
	Id        int
	ProductId string
	Name      string
	CreatedAt time.Time `pg:"default:now()"`
	UpdatedAt time.Time
}
