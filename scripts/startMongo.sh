#!/bin/bash

dir=$PWD

# Check to see if docker is running
dockerStatus=$(docker ps)
if [ -z "$dockerStatus" ]; then
 echo "Docker is not running or isn't installed"
 exit 1; 
fi

res=$(osascript -e "tell app \"Terminal\"
    do script \"docker stop mongo && docker rm mongo && docker run --name mongo -p27017:27017 mongo\"
end tell")
