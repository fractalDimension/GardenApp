# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/express-app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/express-app

# needed for dev environment to watch local file changes (maybe)
# RUN npm install -g gulp-cli
# RUN npm install gulp --save-dev
# RUN npm i gulp

# Copy dependency definitions
COPY package.json /usr/src/express-app

# Install dependecies
RUN npm install

# NOTE: not copying because docker-compose should be sharing the directory instead of copying
# Get all the code needed to run the app
# COPY . /usr/src/express-app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]