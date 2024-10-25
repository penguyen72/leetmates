package services 

import (
    "leetmates-api/db"
)

// ProblemService defines the business logic for problems
type ProblemService interface {
    GetAllProblems(limit int64) ([]db.ProblemModel, error)
}

type problemService struct {
    db db.ProblemDB
}

// NewProblemService creates a new instance of ProblemService
func NewProblemService(db db.ProblemDB) ProblemService {
    return &problemService{db: db}
}

// GetAllProblems handles fetching a limited number of problems
func (s *problemService) GetAllProblems(limit int64) ([]db.ProblemModel, error) {
    // Call the repository to fetch the problems
    problems, err := s.db.GetAllProblems(limit)
    if err != nil {
        return nil, err
    }
    return problems, nil
}
