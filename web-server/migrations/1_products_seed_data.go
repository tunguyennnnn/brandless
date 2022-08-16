package main

import (
	"fmt"

	"github.com/go-pg/migrations/v8"
)

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("seeding products...")
		_, err := db.Exec(`INSERT INTO products (product_id, name) VALUES ('product1', 'product1')`)
		return err
	}, func(db migrations.DB) error {
		fmt.Println("truncating products...")
		_, err := db.Exec(`TRUNCATE products`)
		return err
	})
}
