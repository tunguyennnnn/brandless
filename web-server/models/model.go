package models

import (
	"log"

	"web-server/libs"

	"github.com/go-pg/pg/v10"
	"github.com/go-pg/pg/v10/orm"
	"github.com/joho/godotenv"
)

var db *pg.DB

func ConnectDB() {

	db := GetDB()

	err := createSchema(db)
	if err != nil {
		panic(err)
	}
}

func GetDB() *pg.DB {
	if db != nil {
		return db
	}
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	db = pg.Connect(&pg.Options{
		User:     libs.GetEnv("USER_DB", "postgres"),
		Database: libs.GetEnv("DB", "postgres"),
		Password: libs.GetEnv("PASSWORD_DB", "postgres"),
		Addr:     libs.GetEnv("ADDR_DB", "db:5432"),
	})

	// defer db.Close()

	return db
}

type DefineModelPair struct {
	model       interface{}
	createIndex func(db *pg.DB) error
}

func createSchema(db *pg.DB) error {
	models := []DefineModelPair{
		{(*Product)(nil), CreateProductIndex},
		{(*Brand)(nil), CreateBrandIndex},
	}

	for _, pair := range models {
		err := db.Model(pair.model).CreateTable(&orm.CreateTableOptions{
			IfNotExists: true,
		})

		if err != nil {
			return err
		}

		err = pair.createIndex(db)

		if err != nil {
			return err
		}
	}
	return nil
}
