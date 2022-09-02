package repositories

import (
	"web-server/models"
	model "web-server/models"
)

func GetProductReviews(productId string) []models.Comment {
	db := model.GetDB()
	var comments []model.Comment
	var err error

	err = db.Model(&comments).Where("product_id = ?", productId).Select()

	if err != nil {
		panic(err)
	}

	return comments
}
