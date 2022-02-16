FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g
COPY . .
EXPOSE 8080
CMD npm start