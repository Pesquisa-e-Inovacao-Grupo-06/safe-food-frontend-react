FROM node:18

COPY . .

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "preview"]