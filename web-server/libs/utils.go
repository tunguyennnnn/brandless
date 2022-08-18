package libs

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func GetEnv(key string, fallback ...string) string {
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
