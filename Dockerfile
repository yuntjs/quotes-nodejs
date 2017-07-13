FROM mhart/alpine-node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /quotes-nodejs && cp -a /tmp/node_modules /quotes-nodejs

WORKDIR /quotes-nodejs
ADD . /quotes-nodejs

EXPOSE 9000

CMD ["npm", "start"]
