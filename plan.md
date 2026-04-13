Plan: Cube a monorepo for my infrastructure packages

To deploy an application, these are the usual steps that I carry out:
- Provision or have provisioned a VM to run my code on
  - set up SSH and connect to the VM
  - setup a new user that is not root on the VM and give it the needed groups like sudo
  - setup the firewall
  - setup the vm for the container application by installing docker and make sure that I am authorized to access the registry
- Package code into a docker image using a docker file
- Run the docker commands
- Push the image to the registry
- SSH into the VM
- Pull the image from the registry
- Run the docker container

goal is to write a CLI that accepts input and 
- runs / executes SSH commands
- runs / executes Docker commands