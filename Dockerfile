# Use a base Node.js image for the frontend
FROM node:latest as frontend

# Set working directory for the frontend
WORKDIR /app/frontend

# Copy frontend dependencies
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ .

# Build frontend code
RUN npm run build

# Use a base Node.js image for the backend
FROM node:latest as backend

# Set working directory for the backend
WORKDIR /app/backend

# Copy backend dependencies
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY backend/ .

# Expose the port your backend app runs on
EXPOSE 8060

# Command to run your backend server
CMD ["npm", "start"]
