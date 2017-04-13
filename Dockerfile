FROM ruby:2.4.0-slim

MAINTAINER Dennis Schmidt <dennis.devops@gmail.com>

RUN apt-get update && \
    apt-get install -qq -y \
    build-essential \
    libpq-dev \
    postgresql-client-9.4 \
    --fix-missing --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

CMD bash server.sh 3000 development
