#!/bin/bash
ssh -o "StrictHostKeyChecking no" docker@$MANAGER_IP env TAG=0.1.$CIRCLE_BUILD_NUM DOCKER_USER=$DOCKER_USER DOCKER_PASS=$DOCKER_PASS 'bash -s' <<'ENDSSH'
  docker service update --image taejunyun/quotesnodejs:$TAG --force --update-delay 3s app_node
ENDSSH
