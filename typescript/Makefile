.PHONY: docker-build docker-run

VERSION = latest

docker-build:
	docker build -t hellowww-ts:$(VERSION) . -f Dockerfile

docker-run:
	docker run -p 8081:80 -t hellowww-ts:$(VERSION)

docker-run-detached:
	docker run -p 8081:80 -t -d hellowww-ts:$(VERSION)
