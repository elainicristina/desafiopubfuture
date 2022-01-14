FROM node:16-alpine
LABEL author="Elaini Cristina <elaini@tuta.io>"


# Copiando arquivos para dentro do conteiner 

COPY ./src /srv/src
COPY ./ormconfig.js /srv/ormconfig.js
COPY ./package.json /srv/package.json
COPY ./package-lock.json /srv/package-lock.json
COPY ./tsconfig.json /srv/tsconfig.json

# Instalando dependencias 

WORKDIR /srv
RUN npm install
RUN npm fund

# Expondo a porta para acesso externo

EXPOSE 3001

# Comando para executar

CMD ["npm", "start"]