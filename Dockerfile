FROM node:18
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . /app/
RUN npm run build
EXPOSE 4173
CMD [ "npm", "run", "preview" ]