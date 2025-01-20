# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory in container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose the backend port (adjust if needed)
EXPOSE 5173

# Start the server
CMD ["node", "src/main.jsx"]
