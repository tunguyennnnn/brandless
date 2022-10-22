package main

import (
	"log"
	"net"

	grpcServer "product-scraper/grpc"
)

func main() {
	conn, err := net.Listen("tcp", ":4001")

	if err != nil {
		log.Fatal("tcp connection error: ", err.Error())
	}

	grpcServer := grpcServer.NewRPCServer()

	log.Printf("connect to %s", "4001")

	if err := grpcServer.Serve(conn); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
