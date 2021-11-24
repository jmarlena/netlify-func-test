FROM node:17-bullseye-slim

RUN apt-get update && apt-get install curl -y


RUN npm install netlify-cli -g

RUN curl  https://dl.google.com/go/go1.17.3.linux-amd64.tar.gz |  tar -v -xz -C /usr/local


ENV PATH $PATH:/usr/local/go/bin

COPY . /src
WORKDIR /src

ENTRYPOINT /src/docker-entrypoint.sh