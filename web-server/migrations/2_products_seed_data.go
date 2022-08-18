package main

import (
	"fmt"
	"strconv"

	"github.com/go-pg/migrations/v8"
)

func init() {
	migrations.MustRegisterTx(func(db migrations.DB) error {
		fmt.Println("seeding products...")
		insert := `VALUES `

		for i := 0; i < 100; i++ {
			insert += ` ('product` + strconv.Itoa(i) + `', 'product` + strconv.Itoa(i) + `'),`
		}

		insert += ` ('product100', 'product100');`
		_, err := db.Exec(`INSERT INTO products (product_id, name) ` + insert)
		return err
	}, func(db migrations.DB) error {
		fmt.Println("truncating products...")
		_, err := db.Exec(`TRUNCATE products`)
		return err
	})
}
