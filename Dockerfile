FROM node:18-alpine
WORKDIR /home/node/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]