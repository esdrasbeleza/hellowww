.PHONY: docker-build docker-run

VERSION = latest

docker-build:
	docker build -t hellowww-ts:$(VERSION) . -f Dockerfile

docker-run:
	docker run -p 8081:80 -it hellowww-ts:$(VERSION)
