# IMAGE - BASE
FROM microsoft/dotnet as base
WORKDIR /docker
COPY ./src .
ENTRYPOINT [ "dotnet" ]
