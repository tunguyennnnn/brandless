package main

import (
	"context"
	"log"
	"net"
	adminapis "product-scraper/adminapis"

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

	res := adminapis.PullProductsResponse{
		IsDone:     false,
		Percentage: 10,
	}
	return &res, nil
}

func main() {
	conn, err := net.Listen("tcp", ":4001")

	if err != nil {
		log.Fatal("tcp connection error: ", err.Error())
	}

	grpcServer := NewRPCServer()

	log.Printf("connect to %s", "4001")

	if err := grpcServer.Serve(conn); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
