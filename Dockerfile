# Use Node LTS base image
FROM node:23.11-alpine

# Set working directory
WORKDIR /app 

# Copy files
COPY package*.json ./
COPY index.js ./

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
