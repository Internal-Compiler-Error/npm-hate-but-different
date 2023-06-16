FROM node:20-alpine
LABEL authors="liangw"



WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]