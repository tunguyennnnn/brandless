package main

import (
	"log"
	"net/http"
	"web-server/graph/generated"
	graph "web-server/graph/resolvers"
	"web-server/libs"
	"web-server/models"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

const defaultPort = "4000"

func main() {
	models.ConnectDB()
	port := libs.GetEnv("PORT", defaultPort)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
