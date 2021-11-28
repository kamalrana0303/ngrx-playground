FROM node:8.9.4
WORKDIR /code
ENV PORT    80
COPY package.json /code/package.json
RUN npm install
COPY .  /code
CMD ["node"]