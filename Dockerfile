# ---------------------------------------------------
# Stage 1: Build the React Application
# ---------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package management files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy full application source code
COPY . .

# Build production bundle (generates /app/dist)
RUN npm run build

# ---------------------------------------------------
# Stage 2: Serve static files using Nginx
# ---------------------------------------------------
FROM nginx:alpine AS runner

# Remove default Nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build artifacts from stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the host environment
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
