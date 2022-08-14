package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"
	"web-server/graph/generated"
	"web-server/graph/model"
	"web-server/repositories"
)

func (r *queryResolver) Health(ctx context.Context) (string, error) {
	return "hello", nil
}

func (r *queryResolver) Products(ctx context.Context) ([]*model.Product, error) {
	products := repositories.GetProducts(100)

	var res []*model.Product

	for _, product := range products {
		res = append(res, &model.Product{
			ID:        strconv.Itoa(product.Id),
			Name:      product.Name,
			ProductID: product.ProductId,
		})
	}
	return res, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
