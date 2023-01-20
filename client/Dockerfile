FROM node:18.12.1

WORKDIR /usr/src/app

COPY package.json ./ 

RUN npm install node axios

COPY . .

CMD [ "npm", "start" ]
