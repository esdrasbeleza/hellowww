FROM elixir:1.10-alpine AS build
COPY . /app

ENV MIV_ENV=prod
WORKDIR /app
RUN mix local.hex --force && mix local.rebar --force && mix deps.get && mix release

FROM alpine AS runner
COPY --from=build /app/_build/dev/rel/hellowww /app
RUN apk add --update ncurses
WORKDIR /app
EXPOSE 8080
CMD ["./bin/hellowww", "start"]
