# Create image based on the official Node 6 image from dockerhub
FROM node:7

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/garden-app-dev

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/garden-app-dev

# Copy dependency definitions
COPY package.json /usr/src/garden-app-dev

# Install dependecies
RUN npm install

# NOTE: not copying since "docker run" will share the dev directory
# Get all the code needed to run the app
#COPY . /usr/src/garden-app-dev

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
