package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"strconv"
	"web-server/graph/generated"
	"web-server/graph/model"
	"web-server/repositories"
)

func (r *brandResolver) Products(ctx context.Context, obj *model.Brand) (*model.ProductConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Brands(ctx context.Context, limit *int, cursor *string) (*model.BrandConnection, error) {
	var queryLimit int

	if limit == nil {
		queryLimit = 30
	} else {
		queryLimit = *limit
	}

	brands := repositories.GetBrands(queryLimit)

	var edges []*model.BrandEdge

	if len(brands) == 0 {
		return &model.BrandConnection{
			PageInfo: &model.PageInfo{
				HasNextPage:     false,
				HasPreviousPage: false,
				StartCursor:     cursor,
				EndCursor:       nil,
			},
			TotalCount: 0,
			Edges:      edges,
		}, nil
	}

	for _, brand := range brands {
		id := strconv.Itoa(brand.Id)
		edges = append(edges, &model.BrandEdge{

			Node: &model.Brand{
				ID:   id,
				Name: brand.Name,
				Logo: &brand.Logo,
			},
			Cursor: id,
		})
	}

	first := brands[0]
	last := brands[len(brands)-1]

	startCursor := first.CreatedAt.String()
	endCursor := last.CreatedAt.String()
	var res *model.BrandConnection

	res = &model.BrandConnection{
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

// Brand returns generated.BrandResolver implementation.
func (r *Resolver) Brand() generated.BrandResolver { return &brandResolver{r} }

type brandResolver struct{ *Resolver }
