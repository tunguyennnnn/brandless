package grpcserver

import (
	"context"
	"fmt"
	adminapis "product-scraper/adminapis"

	"github.com/gocolly/colly"
	"google.golang.org/grpc"
)

type grpcServer struct {
	adminapis.UnimplementedAdminAPIServiceServer
}

func NewRPCServer() *grpc.Server {
	srv := grpcServer{}

	gsrv := grpc.NewServer()
	adminapis.RegisterAdminAPIServiceServer(gsrv, &srv)
	return gsrv
}

func (lss *grpcServer) PullProducts(ctx context.Context, req *adminapis.PullProductsRequest) (*adminapis.PullProductsResponse, error) {

	c := colly.NewCollector(
		colly.MaxDepth(1),
		colly.UserAgent("Mozilla/5.0"),
		colly.AllowedDomains("www.adidas.ca"),
	)

	c.OnHTML("div.container", func(e *colly.HTMLElement) {
		e.ForEach(".glass-product-card-container", func(_ int, el *colly.HTMLElement) {
			name := el.ChildText("p.glass-product-card__title")
			fmt.Println("name", name)
		})

		fmt.Println("Scrapping Complete")
	})

	c.OnResponse(func(res *colly.Response) {
		fmt.Println("Received response", res.StatusCode)
	})

	c.OnError(func(res *colly.Response, err error) {
		fmt.Println("error", err, res.StatusCode)
	})
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	})

	c.Visit("https://www.adidas.ca/en/men-originals-shoes")

	res := adminapis.PullProductsResponse{
		IsDone:     false,
		Percentage: 10,
	}
	return &res, nil
}
