# Build React frontend
FROM node:18-alpine AS frontend

# Set working directory inside the container for the frontend
WORKDIR /app/todo-app

# Install dependencies and build the frontend
COPY todo-app/package*.json ./
RUN npm install
COPY todo-app/ ./
RUN npm run build

#  Set up Python backend
FROM python:3.11-slim AS backend

# Set working directory inside the container for the backend
WORKDIR /app/backend

# Install backend dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY backend/ .

# Copy the built frontend from the previous stage into the backend's static directory
COPY --from=frontend /app/todo-app/build ./static

# Expose the port the app runs on
EXPOSE 5000

# Command to run the backend (Flask example)
CMD ["python", "app.py"]
