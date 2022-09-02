package repositories

import (
	"strconv"
	"time"
	model "web-server/models"
)

func GetProducts(limit int, from *string, brandId *string) []model.Product {
	db := model.GetDB()
	var products []model.Product
	var err error
	if from != nil {

		i, convErr := strconv.ParseInt(*from, 10, 64)
		if convErr != nil {
			panic(err)
		}

		if brandId == nil {
			err = db.Model(&products).Where("created_at > ?", time.Unix(i/1000000000, i%1000000000)).Limit(limit).Select()
		} else {
			err = db.Model(&products).Where("brand_id = ? AND created_at > ?", brandId, time.Unix(i/1000000000, i%1000000000)).Limit(limit).Select()
		}
	} else {
		if brandId != nil {
			err = db.Model(&products).Where("brand_id = ?", brandId).Limit(limit).Select()
		} else {
			err = db.Model(&products).Limit(limit).Select()
		}
	}

	if err != nil {
		panic(err)
	}

	return products
}

func GetProductById(id string) *model.Product {
	db := model.GetDB()
	var product model.Product
	var err error

	err = db.Model(&product).Where("id = ?", id).Select()

	if err != nil {
		panic(err)
	}

	return &product
}
