# Verwenden eines offiziellen Node.js Basisimages
FROM node:20
 
# Arbeitsverzeichnis im Container festlegen
WORKDIR /app
 
# Kopieren der package.json und package-lock.json (falls vorhanden)
COPY package*.json ./

# Kopieren des Quellcodes in das Arbeitsverzeichnis
COPY . .

RUN npm install

RUN npm install --global yarn
 
# Installieren von Abhängigkeiten
RUN yarn install
 

 
# Linting durchführen
RUN yarn lint
 
# Tests durchführen
RUN yarn test
 
# Build durchführen
RUN yarn build

CMD yarn start