package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"
	Loader "web-server/dataloader"
	"web-server/graph/generated"
	"web-server/graph/model"
	"web-server/repositories"
	"web-server/services/endpoints"

	"github.com/graph-gophers/dataloader"
)

func (r *productResolver) Brand(ctx context.Context, obj *model.Product) (*model.Brand, error) {
	loaders := Loader.For(ctx)

	thunk := loaders.BrandLoader.Load(ctx, dataloader.StringKey(obj.BrandID))
	result, err := thunk()

	if err != nil {
		return nil, err
	}

	return result.(*model.Brand), nil
}

func (r *productResolver) Reviews(ctx context.Context, obj *model.Product, limit *int, cursor *string) (*model.CommentConnection, error) {
	comments := repositories.GetProductReviews(obj.ID)

	var edges []*model.CommentEdge

	for _, comment := range comments {
		createdAt := strconv.FormatInt(comment.CreatedAt.UnixNano(), 10)

		edges = append(edges, &model.CommentEdge{
			Node: &model.Comment{
				ID:        strconv.Itoa(comment.Id),
				Content:   comment.Content,
				Media:     comment.Media,
				CreatedAt: createdAt,
			},
			Cursor: createdAt,
		})
	}

	var res *model.CommentConnection

	res = &model.CommentConnection{
		PageInfo: &model.PageInfo{
			HasNextPage:     false,
			HasPreviousPage: false,
			StartCursor:     nil,
			EndCursor:       nil,
		},
		TotalCount: 100,
		Edges:      edges,
	}

	return res, nil
}

func (r *queryResolver) Products(ctx context.Context, limit *int, cursor *string, brandID *string) (*model.ProductConnection, error) {
	var queryLimit int

	if limit == nil {
		queryLimit = 30
	} else {
		queryLimit = *limit
	}

	products := repositories.GetProducts(queryLimit, cursor, brandID)
	var edges []*model.ProductEdge
	if len(products) == 0 {
		return &model.ProductConnection{
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

	for _, product := range products {
		createdAt := strconv.FormatInt(product.CreatedAt.UnixNano(), 10)

		edges = append(edges, &model.ProductEdge{
			Node: &model.Product{
				ID:        strconv.Itoa(product.Id),
				Name:      product.Name,
				ProductID: product.ProductId,
				CreatedAt: createdAt,
				BrandID:   strconv.Itoa(product.BrandId),
				Link:      product.Link,
				Images:    product.Images,
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

func (r *queryResolver) Product(ctx context.Context, id string) (*model.Product, error) {
	product := repositories.GetProductById(id)

	res := &model.Product{
		ID:        strconv.Itoa(product.Id),
		Name:      product.Name,
		ProductID: product.ProductId,
		CreatedAt: strconv.FormatInt(product.CreatedAt.UnixNano(), 10),
		BrandID:   strconv.Itoa(product.BrandId),
		Link:      product.Link,
		Images:    product.Images,
	}

	return res, nil
}

func (r *queryResolver) DiscoverProducts(ctx context.Context, url string) (bool, error) {
	endpoints.DiscoverProduct(url)
	return true, nil
}

// Product returns generated.ProductResolver implementation.
func (r *Resolver) Product() generated.ProductResolver { return &productResolver{r} }

type productResolver struct{ *Resolver }
