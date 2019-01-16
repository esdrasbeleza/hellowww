.PHONY: build run

VERSION = latest

build:
	docker build -t hellowww-go:$(VERSION) . -f Dockerfile

run:
	docker run -p 8080:80 -it hellowww-go:$(VERSION)
