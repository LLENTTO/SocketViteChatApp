FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

# Expose the backend port (adjust if needed)
EXPOSE 5002

CMD ["node", "src/index.js"]
