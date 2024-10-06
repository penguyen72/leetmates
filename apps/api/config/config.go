package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// Config struct to hold all configuration settings
type Config struct {
    MongoDBUri      string
    MongoDBDatabase string
    Port            string
    Environment     string
}

// LoadConfig reads configuration settings from environment variables or `.env` file
func LoadConfig() *Config {
    // Load .env file only in development environment
    if os.Getenv("GO_ENV") != "production" {
        err := godotenv.Load()
        if err != nil {
            log.Println("No .env file found")
        }
    }

    // Initialize the config struct
    config := &Config{
        MongoDBUri:      getEnv("MONGODB_URI", "mongodb://localhost:27017"),
        MongoDBDatabase: getEnv("MONGODB_DATABASE", "mydatabase"),
        Port:            getEnv("PORT", "8080"),
        Environment:     getEnv("GO_ENV", "development"),
    }

    return config
}

// getEnv fetches environment variables or uses the default value if not set
func getEnv(key, defaultValue string) string {
    value := os.Getenv(key)
    if value == "" {
        return defaultValue
    }
    return value
}
