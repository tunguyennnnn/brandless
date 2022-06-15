package main

import (
	"log"
	"net/http"
	"os"
	"web-server/graph"
	"web-server/graph/generated"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"
)

const defaultPort = "4000"

func getEnv(key string, fallback ...string) string {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	value := os.Getenv(key)

	if value != "" {
		return value
	}

	if len(fallback) == 0 {
		log.Fatalf("%d does not exist", key)
	}

	return fallback[0]
}

func main() {
	port := getEnv("PORT", defaultPort)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
