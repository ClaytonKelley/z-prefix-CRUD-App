# Specify the node base image with your desired version, e.g. node:<version>
FROM node:alpine

# Set and create the working directory for this app
WORKDIR /server

# Copy this application's files from the current directory to the filesystem
# of the container at /app
COPY . /server
COPY package*.json ./

# Make the container accept traffic on port 3000 at runtime from other
# containers or the host if also published
# bumped up one port cuz api and such
EXPOSE 8080

# Run this shell command at build time
RUN npm install
RUN npm install -g nodemon


# Start the application
CMD npm start