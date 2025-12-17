# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install app dependencies using npm ci for deterministic installs
RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 8000, so expose that port
EXPOSE 8000

# Define the command to run your app
CMD [ "npm", "start" ]
