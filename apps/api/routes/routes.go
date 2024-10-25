package routes

import (
    "net/http"
    "leetmates-api/handlers"
)

func NewRouter(handler *handlers.ProblemHandler) http.Handler {
    mux := http.NewServeMux()

    mux.HandleFunc("/problems", handler.GetAllProblems)

    return mux
}
