FROM node:current-alpine3.15
USER root
WORKDIR /home/app
COPY ./package*.json /home/app/

ENV CHROME_BIN=/usr/bin/chromium-browser
RUN npm install



RUN apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main
COPY . .

EXPOSE 8080

CMD ["npm","start"]
