# Use a imagem oficial do Node.js para o ambiente de build.
FROM node:18-alpine

# Defina o diretório de trabalho.
WORKDIR /app

# Copie os arquivos package.json e package-lock.json.
COPY package*.json ./

# Instale as dependências.
RUN npm install

# Copie o restante dos arquivos da aplicação.
COPY . .

# A porta padrão do Vite é a 5173.
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento do Vite.
CMD ["npm", "run", "dev"]
