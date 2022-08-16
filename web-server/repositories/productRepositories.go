package repositories

import (
	model "web-server/models"
)

func GetProducts(limit int) []model.Product {
	db := model.GetDB()
	var products []model.Product
	err := db.Model(&products).Limit(limit).Select()

	if err != nil {
		panic(err)
	}

	return products
}
