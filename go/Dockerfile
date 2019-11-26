FROM golang:latest AS builder

WORKDIR .
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix nocgo -o /hellowww .

FROM scratch
COPY --from=builder /hellowww ./
ENTRYPOINT ["./hellowww"]
EXPOSE 80
