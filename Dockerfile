# Step 1
FROM node:10-alpine as app-build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build:development
 
# Stage 2
FROM nginx:1.17.1-alpine
# COPY --from=app-build-step Add certificate
# COPY --from=app-build-step Add certificate
COPY --from=app-build-step /app/build /usr/share/nginx/html
COPY --from=app-build-step /app/nginx/default.conf /etc/nginx/conf.d/default.conf