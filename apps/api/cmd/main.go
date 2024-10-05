package main

import (
    "fmt"
    "net/http"
    "leetmates-api/internal/routes"
)

func main() {
    router := routes.NewRouter()

    // Start the server on port 8080
    fmt.Println("Starting server on :8080...")
    err := http.ListenAndServe(":8080", router)
    if err != nil {
        fmt.Println("Error starting server:", err)
    }
}
