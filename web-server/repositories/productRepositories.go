package repositories

import (
	model "web-server/models"
)

func GetProducts(limit int32) []model.Product {
	db := model.GetDB()
	var products []model.Product
	err := db.Model(&products).Select()

	if err != nil {
		panic(err)
	}

	return products
}
