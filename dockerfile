FROM node:20

WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]

