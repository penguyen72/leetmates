package main

import (
	"context"
	"fmt"
	"leetmates-api/config"
	"leetmates-api/internal/db"
	"leetmates-api/internal/routes"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
)

func main() {
    cfg := config.LoadConfig()
    router := routes.NewRouter()

    // Create a new client and connect to the server
    db, err := db.Connect(cfg.MongoDBUri, cfg.MongoDBDatabase)

    if err != nil {
        panic(err)
    }
    defer func() {
        if err = db.Disconnect(context.TODO()); err != nil {
        panic(err)
        }
    }()
    // Send a ping to confirm a successful connection
    if err := db.Database("admin").RunCommand(context.TODO(), bson.D{{"ping", 1}}).Err(); err != nil {
        panic(err)
    }
    fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")

    // Start the server on port 8080
    fmt.Println("Starting server on :8080...")
    server_err := http.ListenAndServe(":8080", router)
    if server_err != nil {
        fmt.Println("Error starting server:", server_err)
    }
}
