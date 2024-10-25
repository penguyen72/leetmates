package main

import (
	"context"
	"fmt"
	"leetmates-api/config"
	"leetmates-api/db"
	"leetmates-api/routes"
	"leetmates-api/handlers"
	"leetmates-api/services"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
)

func main() {
    cfg := config.LoadConfig()

    // Create a new client and connect to the server
    client, err := db.Connect(cfg.MongoDBUri, cfg.MongoDBDatabase)

    if err != nil {
        panic(err)
    }
    defer func() {
        if err = client.Disconnect(context.TODO()); err != nil {
        panic(err)
        }
    }()

    if err := client.Database("dev").RunCommand(context.TODO(), bson.D{{"ping", 1}}).Err(); err != nil {
        panic(err)
    }

    fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")

	collection := client.Database("dev").Collection("problems")

	repo := db.NewProblemDB(collection)
    service := services.NewProblemService(repo)
	problemHandler := handlers.NewProblemHandler(service)
    router := routes.NewRouter(problemHandler)

    // Start the server on port 8080
    fmt.Println("Starting server on :8080...")
    server_err := http.ListenAndServe(":8080", router)
    if server_err != nil {
        fmt.Println("Error starting server:", server_err)
    }
}
