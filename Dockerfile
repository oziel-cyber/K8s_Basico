FROM node:13
WORKDIR c:/ProjectInicial/
COPY . ./
RUN apt-get install
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]