FROM node:alpine3.18 as build

# Declare build time environment variables
ARG VITE_REACT_APP_NODE_ENV
ARG VITE_REACT_APP_SERVER_BASE_URL

# Set default values for environment variables
ENV VITE_REACT_APP_NODE_ENV=$VITE_REACT_APP_NODE_ENV
ENV VITE_REACT_APP_SERVER_BASE_URL=$VITE_REACT_APP_SERVER_BASE_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
