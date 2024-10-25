package handlers

import (
    "encoding/json"
    "leetmates-api/services"
    "net/http"
    "strconv"
)

// ProblemHandler handles HTTP requests related to problems
type ProblemHandler struct {
    service services.ProblemService
}

// NewProblemHandler creates a new instance of ProblemHandler
func NewProblemHandler(service services.ProblemService) *ProblemHandler {
    return &ProblemHandler{service: service}
}

// GetAllProblems handles the GET request for fetching all problems with a limit
func (h *ProblemHandler) GetAllProblems(w http.ResponseWriter, r *http.Request) {
    // Parse the limit from query parameters
    limitStr := r.URL.Query().Get("limit")
    limit, err := strconv.ParseInt(limitStr, 10, 64)
    if err != nil || limit <= 0 {
        http.Error(w, "Invalid limit parameter", http.StatusBadRequest)
        return
    }

    // Call the service to get the problems
    problems, err := h.service.GetAllProblems(limit)
    if err != nil {
        http.Error(w, "Failed to fetch problems", http.StatusInternalServerError)
        return
    }

    // Respond with the list of problems in JSON format
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(problems)
}
