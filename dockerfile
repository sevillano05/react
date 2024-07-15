FROM node:20

ENV PORT=3000

WORKDIR /App.jsx
COPY . /package*.json ./
COPY . .
RUN npm run build


FROM nginx:1.22.1-alpine as prod-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]