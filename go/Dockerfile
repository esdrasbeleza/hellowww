FROM golang:latest AS builder
ADD https://github.com/golang/dep/releases/download/v0.4.1/dep-linux-amd64 /usr/bin/dep
RUN chmod +x /usr/bin/dep

WORKDIR .
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix nocgo -o /hellowww .

FROM scratch
COPY --from=builder /hellowww ./
ENTRYPOINT ["./hellowww"]
EXPOSE 80
