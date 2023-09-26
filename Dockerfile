FROM node:16.19

WORKDIR /phase-2-project-brewery-taplist/

COPY public/ /phase-2-project-brewery-taplist/public
COPY src/ /phase-2-project-brewery-taplist/src
COPY package.json /phase-2-project-brewery-taplist/

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "start", "0.0.0.0"]