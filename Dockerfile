FROM node:18-alpine

WORKDIR /app

# Copy only dependency declarations
COPY package*.json ./

# Install fresh dependencies
RUN npm install

# Copy everything else (after install)
COPY . .

# Build frontend
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "index.js"]
