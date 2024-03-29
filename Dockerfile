FROM node:16-alpine3.11

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:1.21.1

EXPOSE 80

COPY --from=0 /usr/app/build /usr/share/nginx/html
