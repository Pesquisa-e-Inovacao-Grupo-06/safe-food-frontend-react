FROM node:18

COPY . .

RUN npm i
RUN npm run build

EXPOSE 8081


CMD ["npm", "run", "preview"]