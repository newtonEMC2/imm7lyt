FROM node:10

EXPOSE 3000

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

#typescript
RUN npm run build


CMD ["npm", "start"]
