# Create image based on the official Node 6 Alpine image from the dockerhub
#FROM node:6.11.0-alpine
FROM node:8-alpine

# needed for gRPC
RUN apk add --no-cache \
  libc6-compat 
  

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/express-ts-app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/express-ts-app

# Copy dependency definitions
COPY package.json /usr/src/express-ts-app

# Install dependecies
RUN npm install

# Rebuild gRPC package just in case
# RUN npm rebuild grpc --build-from-source --update-binary

# NOTE: not copying since "docker run" will share the dev directory
# Get all the code needed to run the app
# COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]