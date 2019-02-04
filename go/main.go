package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	name, _ := os.Hostname()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "[Go] Welcome to %s!", name)
	})

	http.ListenAndServe(":80", nil)
}
