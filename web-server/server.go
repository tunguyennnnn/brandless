package main

import (
	"log"
	"net/http"
	"web-server/dataloader"
	"web-server/graph/generated"
	graph "web-server/graph/resolvers"
	"web-server/libs"
	"web-server/models"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
)

const defaultPort = "4000"

func runWebServer() {
	port := libs.GetEnv("PORT", defaultPort)
	router := mux.NewRouter()

	router.Use(func(h http.Handler) http.Handler {
		loader := dataloader.NewLoaders(models.GetDB())
		return dataloader.Middleware(loader, h)
	})

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

func main() {
	models.ConnectDB()
	runWebServer()
}
