package db

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func Connect(uri, dbName string) (*mongo.Client, error) {
    serverAPI := options.ServerAPI(options.ServerAPIVersion1)
    clientOptions := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        return nil, err
    }

    // Ping the database to ensure connection
    err = client.Ping(context.TODO(), nil)
    if err != nil {
        return nil, err
    }

    fmt.Println("ping successful")

    return client, nil
}
