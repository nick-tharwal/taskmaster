FROM node:18.12.1

WORKDIR /usr/scr/app

COPY . /usr/scr/app

RUN npm install node mongoose express nodemon cors axios

COPY . . 

CMD [ "node", "index.js" ]
