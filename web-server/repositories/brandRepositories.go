package repositories

import (
	model "web-server/models"

	"github.com/go-pg/pg/v10"
)

func GetBrandByIds(ids []string) []model.Brand {
	db := model.GetDB()
	var brands []model.Brand
	var err error

	err = db.Model(&brands).Where("id IN (?)", pg.In(ids)).Select()

	if err != nil {
		panic(err)
	}

	return brands
}

func GetBrands(limit int) []model.Brand {
	db := model.GetDB()
	var brands []model.Brand
	var err error

	err = db.Model(&brands).Limit(limit).Select()

	if err != nil {
		panic(err)
	}

	return brands
}
