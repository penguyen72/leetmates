package db

import (
    "context"

    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo"
)

type ProblemDB interface {
    GetAllProblems(limit int64) ([]ProblemModel, error)
}

type problemDB struct {
    collection *mongo.Collection
}

func NewProblemDB(collection *mongo.Collection) ProblemDB {
    return &problemDB{collection: collection}
}


func (r *problemDB) GetAllProblems(limit int64) ([]ProblemModel, error) {
    var problems []ProblemModel

    findOptions := options.Find()
    findOptions.SetLimit(limit)

    // Perform the query
    cursor, err := r.collection.Find(context.TODO(), bson.M{}, findOptions)
    if err != nil {
        return nil, err
    }
    defer cursor.Close(context.TODO())

    // Iterate through the cursor and decode the problems
    for cursor.Next(context.TODO()) {
        var problem ProblemModel
        if err := cursor.Decode(&problem); err != nil {
            return nil, err
        }
        problems = append(problems, problem)
    }

    if err := cursor.Err(); err != nil {
        return nil, err
    }

    return problems, nil}
