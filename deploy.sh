#!/bin/bash
ssh -o "StrictHostKeyChecking no" docker@ec2-52-14-238-30.us-east-2.compute.amazonaws.com env TAG=0.1.$CIRCLE_BUILD_NUM DOCKER_USER=$DOCKER_USER DOCKER_PASS=$DOCKER_PASS 'bash -s' <<'ENDSSH'
  sudo docker service update --image taejunyun/quotesnodejs:$TAG --force --update-delay 3s app_node
ENDSSH
