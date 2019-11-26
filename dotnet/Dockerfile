FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS builder
COPY . /app
WORKDIR /app
RUN dotnet publish -c Release -o build

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS runtime
WORKDIR /app
COPY --from=builder /app/build/* ./
ENTRYPOINT ["dotnet", "dotnet.dll"]
