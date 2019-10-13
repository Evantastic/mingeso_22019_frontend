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

RUN rm /etc/nginx/conf.d/default.conf

COPY  /app/config /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]

