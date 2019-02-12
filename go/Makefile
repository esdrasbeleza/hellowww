.PHONY: docker-build docker-run

VERSION = latest

docker-build:
	docker build -t hellowww-go:$(VERSION) . -f Dockerfile

docker-run:
	docker run -p 8080:80 -t hellowww-go:$(VERSION)

docker-run-detached:
	docker run -p 8080:80 -t -d hellowww-go:$(VERSION)
