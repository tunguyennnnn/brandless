package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"web-server/graph/generated"
	"web-server/graph/model"
)

func (r *brandResolver) Products(ctx context.Context, obj *model.Brand) (*model.ProductConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Brands(ctx context.Context, limit *int, cursor *string) (*model.BrandConnection, error) {
	panic(fmt.Errorf("not implemented"))
}

// Brand returns generated.BrandResolver implementation.
func (r *Resolver) Brand() generated.BrandResolver { return &brandResolver{r} }

type brandResolver struct{ *Resolver }
