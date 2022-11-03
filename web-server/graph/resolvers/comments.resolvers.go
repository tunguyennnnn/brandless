package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"web-server/graph/model"
)

func (r *queryResolver) Comments(ctx context.Context, productID string) (*model.CommentConnection, error) {
	panic(fmt.Errorf("not implemented"))
}
