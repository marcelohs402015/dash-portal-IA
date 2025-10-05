# Use a imagem oficial do Node.js.
FROM node:18-alpine

# Crie e defina o diretório de trabalho.
WORKDIR /app

# Copie os arquivos package.json e package-lock.json.
COPY package*.json ./

# Instale as dependências do projeto.
RUN npm install

# Copie o restante dos arquivos da aplicação.
COPY . .

# A aplicação será executada na porta 3001.
EXPOSE 3001

# Comando para iniciar a aplicação em modo de desenvolvimento.
CMD ["npm", "run", "dev"]
