FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS builder
COPY . /app
WORKDIR /app
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/runtime:3.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./
ENTRYPOINT ["dotnet", "dotnetapp.dll"]
