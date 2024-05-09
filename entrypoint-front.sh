#!/bin/bash

echo "Checking if container already exists..."
read -p "Type container name: ", containerName

containerExists="$(docker container ls -a | grep -i $containerName)"

if [ ! containerExists ]; then
    echo "Container already exists. Initializing it"
    $(docker container start $containerName)
else
    echo "Creating container..."
    exec docker container run -d --name $containerName -p 5000:3000 -v .:/app jvrochadev/calcsfrontend:1.0

fi
