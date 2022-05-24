FROM node:14-alpine

RUN apk add --no-cache su-exec && \
    yarn && \
    addgroup bar && \
    adduser -D -h /home -s /bin/sh -G bar foo

ENV PATH /srv/node_modules/.bin:$PATH

ADD entrypoint.sh /entrypoint

RUN chmod a+x /entrypoint

ENTRYPOINT ["/entrypoint"]

