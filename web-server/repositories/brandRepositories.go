package repositories

import (
	model "web-server/models"
)

func GetBrandByIds(ids []string) []model.Brand {
	db := model.GetDB()
	var brands []model.Brand
	var err error

	err = db.Model(&brands).Where("id IN (1, 2)").Select()

	if err != nil {
		panic(err)
	}

	return brands
}
