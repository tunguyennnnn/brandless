package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"
	"web-server/graph/model"
	"web-server/repositories"
)

func (r *queryResolver) Products(ctx context.Context, limit *int) (*model.ProductConnection, error) {
	var queryLimit int

	if limit == nil {
		queryLimit = 30
	} else {
		queryLimit = *limit
	}

	products := repositories.GetProducts(queryLimit)

	if len(products) == 0 {
		return nil, nil
	}

	var edges []*model.ProductEdge

	for _, product := range products {
		createdAt := product.CreatedAt.String()
		edges = append(edges, &model.ProductEdge{
			Node: &model.Product{
				ID:        strconv.Itoa(product.Id),
				Name:      product.Name,
				ProductID: product.ProductId,
			},
			Cursor: createdAt,
		})
	}

	first := products[0]
	last := products[len(products)-1]

	startCursor := first.CreatedAt.String()
	endCursor := last.CreatedAt.String()
	var res *model.ProductConnection

	res = &model.ProductConnection{
		PageInfo: &model.PageInfo{
			HasNextPage:     false,
			HasPreviousPage: false,
			StartCursor:     &startCursor,
			EndCursor:       &endCursor,
		},
		TotalCount: 100,
		Edges:      edges,
	}

	return res, nil
}
