# Stage 1: Build the React application
FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NAME=$NAME

RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:1.19.0-alpine as serve

COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
