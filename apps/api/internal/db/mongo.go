package db

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func Connect(uri, dbName string) (*mongo.Client, error) {
    clientOptions := options.Client().ApplyURI(uri)
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        return nil, err
    }

    // Ping the database to ensure connection
    err = client.Ping(context.TODO(), nil)
    if err != nil {
        return nil, err
    }

    return client, nil
}
