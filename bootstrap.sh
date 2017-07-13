#!/bin/sh

sudo apt-get -y install software-properties-common
sudo apt-get -y install python-boto
sudo apt-add-repository -y ppa:ansible/ansible
sudo apt-get -y update
sudo apt-get -y install ansible
