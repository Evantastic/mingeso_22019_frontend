# develop stage
FROM nginx:stable-alpine as develop-stage

EXPOSE 80

WORKDIR /app

COPY . .
# build stage
FROM develop-stage as build-stage


# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]