# Pull the latest base image
FROM node:alpine
# set working directory
WORKDIR /app
# Copy package.json to /app
COPY package.json ./
# Copy package-lock.json to /app
COPY package-lock.json ./
# Install dependencies
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]  
# Expose the port the app runs on
EXPOSE 3000