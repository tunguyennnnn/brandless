package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"web-server/graph/generated"
)

// func BuildPaginatedResponse(data []*model.Node) *model.Connection {
// 	if len(data) == 0 {
// 		return &model.Connection{
// 			PageInfo: &model.PageInfo{
// 				HasNextPage:     false,
// 				HasPreviousPage: false,
// 				StartCursor:     nil,
// 				EndCursor:       nil,
// 			},
// 			TotalCount: 100,
// 			Edges:      nil,
// 		}
// 	}

// 	first := data[0]
// 	last := data[len(data)-1]

// 	startCursor := first.CreatedAt.String()
// 	endCursor := last.CreatedAt.String()
// 	var res *model.ProductConnection

// 	res = &model.ProductConnection{
// 		PageInfo: &model.PageInfo{
// 			HasNextPage:     false,
// 			HasPreviousPage: false,
// 			StartCursor:     &startCursor,
// 			EndCursor:       &endCursor,
// 		},
// 		TotalCount: 100,
// 		Edges:      edges,
// 	}
// }

func (r *queryResolver) Health(ctx context.Context) (string, error) {
	return "hello", nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
