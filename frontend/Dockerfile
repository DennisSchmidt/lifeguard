FROM node:7.7-slim

MAINTAINER Dennis Schmidt <dennis.devops@gmail.com>

RUN apt-get update && \
    apt-get install -qq -y \
    curl \
    --fix-missing --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package.json ./
RUN npm install

# COPY . .
