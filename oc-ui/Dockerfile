### STAGE 1: Build ###
FROM node:18.13 AS build
ARG ENV=production
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=$ENV

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/oc-ui /usr/share/nginx/html
