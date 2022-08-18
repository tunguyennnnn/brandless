package repositories

import (
	"strconv"
	"time"
	model "web-server/models"
)

func GetProducts(limit int, from *string) []model.Product {
	db := model.GetDB()
	var products []model.Product
	var err error
	if from != nil {

		i, convErr := strconv.ParseInt(*from, 10, 64)
		if convErr != nil {
			panic(err)
		}

		err = db.Model(&products).Where("created_at > ?", time.Unix(i/1000000000, i%1000000000)).Limit(limit).Select()
	} else {
		err = db.Model(&products).Limit(limit).Select()
	}

	if err != nil {
		panic(err)
	}

	return products
}
