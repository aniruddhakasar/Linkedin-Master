# Use Node 18
FROM node:18

# Set app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Expose default port (Render assigns 10000 but handles routing)
EXPOSE 10000

# Start your LinkedIn Master app
CMD ["npm", "start"]
