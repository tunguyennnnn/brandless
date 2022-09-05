package endpoints

import (
	"context"
	"log"
	pb "web-server/adminapis"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func DiscoverProduct(url string) {
	conn, err := grpc.Dial("product-scraper:4001", grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewAdminAPIServiceClient(conn)
	res, err := client.PullProducts(context.Background(), &pb.PullProductsRequest{
		Url: url,
	})

	if err != nil {
		log.Fatalf("failed to pull products: %v", err)
	}
	log.Printf("products: %v", res)
}
