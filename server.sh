#!/bin/bash
PORT=$1
ENVIRONMENT=$2

export RAILS_ENV=$2

if [ $ENVIRONMENT == 'development' ]; then
  echo "Bundle install"
  bundle install
fi

echo "Setup DB"
bundle exec rails db:create
bundle exec rails db:migrate

echo "Delete old server.pid"
rm -f tmp/pids/server.pid

echo "Starting server ..."
bundle exec rails s -p $PORT -b '0.0.0.0' -e $ENVIRONMENT
