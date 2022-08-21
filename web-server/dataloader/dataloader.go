package dataloader

import (
	"context"
	"fmt"
	"net/http"
	"strconv"
	"web-server/graph/model"
	"web-server/repositories"

	"github.com/go-pg/pg/v10"
	"github.com/graph-gophers/dataloader"
)

type loadersString string

const loadersKey = loadersString("dataloaders")

type BrandReader struct {
	conn *pg.DB
}

func (u *BrandReader) GetBrands(ctx context.Context, keys dataloader.Keys) []*dataloader.Result {
	brands := repositories.GetBrandByIds(keys.Keys())

	brandById := map[string]*model.Brand{}

	output := make([]*dataloader.Result, len(keys))

	for _, brand := range brands {
		brandId := strconv.Itoa(brand.Id)
		brandById[brandId] = &model.Brand{
			ID:   brandId,
			Name: brand.Name,
		}
	}
	for index, brandKey := range keys {
		brand, ok := brandById[brandKey.String()]

		if ok {
			output[index] = &dataloader.Result{Data: brand, Error: nil}
		} else {
			err := fmt.Errorf("user not found %s", brandKey.String())
			output[index] = &dataloader.Result{Data: nil, Error: err}
		}
	}

	return output
}

type Loaders struct {
	BrandLoader *dataloader.Loader
}

func NewLoaders(conn *pg.DB) *Loaders {
	brandLoader := &BrandReader{conn: conn}
	loaders := &Loaders{
		BrandLoader: dataloader.NewBatchedLoader(brandLoader.GetBrands),
	}
	return loaders
}

func Middleware(loaders *Loaders, next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		nextCtx := context.WithValue(r.Context(), loadersKey, loaders)
		r = r.WithContext(nextCtx)
		next.ServeHTTP(w, r)
	})
}

func For(ctx context.Context) *Loaders {
	return ctx.Value(loadersKey).(*Loaders)
}
