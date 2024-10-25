package db

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProblemModel struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Title       string             `bson:"title"`
	Description string             `bson:"description"`
	Difficulty  string             `bson:"difficulty"`
	Tags        []string           `bson:"tags"`
	TestCases   []TestCaseModel    `bson:"test_cases"`
	CreatedAt   time.Time          `bson:"created_at"`
}

// DBTestCase represents a test case as stored in the database.
type TestCaseModel struct {
	Input          string `bson:"input"`
	ExpectedOutput string `bson:"expected_output"`
}