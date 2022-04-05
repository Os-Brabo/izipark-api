FROM node:16-alpine

RUN apk update \
    && apk add bash

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ADD . /app

WORKDIR /app
COPY . /app

ENV TZ=America/Sao_Paulo
RUN set -x \
  && yarn

EXPOSE 3333
EXPOSE 9229

ENTRYPOINT ["dockerize", "-wait", "tcp://postgres:5432", "-timeout", "20s", "docker-entrypoint.sh"]

CMD ["yarn", "dev"]
