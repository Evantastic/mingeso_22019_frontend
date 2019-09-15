#!/bin/bash



IMAGE=vuejs-docker
CONTAINER=vuejs-docker-container
PORT=9090
EXPORT=80


docker build -t $IMAGE .



if docker container ls | grep $CONTAINER > /dev/null; then
docker container stop $CONTAINER
fi


if docker container ls -a | grep $CONTAINER > /dev/null; then
docker container rm $CONTAINER
fi


docker run --name $CONTAINER -d -p $PORT:$EXPORT $IMAGE

