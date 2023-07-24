#!/bin/bash

# Check to see if Mongo is running
mongoStatus=$(docker container top mongo)
if [ -z "$mongoStatus" ]; then
  dockerStatus=$(docker ps)
  if [ -z "$dockerStatus" ]; then
    exit 1
  fi
  bash ./scripts/startMongo.sh
fi

dir=$PWD

res=$(osascript -e "tell app \"Terminal\"
    do script \"cd $dir && tsc -w\"
end tell")
