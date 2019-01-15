.PHONY: build run

VERSION = latest

build:
	docker build -t hellowww:$(VERSION) . -f Dockerfile

run:
	docker run -p 8080:80 -it hellowww:$(VERSION)
