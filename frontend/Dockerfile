# Stage 1: Build the React application
FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of your frontend code
COPY . .

# Build the application using Yarn
RUN yarn build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build directory from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
