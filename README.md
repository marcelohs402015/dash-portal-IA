# 🚀 Portal IA - Sistema de Gerenciamento de Projetos

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![React](https://img.shields.io/badge/react-18.2.0-blue)

**Uma plataforma moderna e escalável para gerenciamento inteligente de projetos**

[Características](#-características) •
[Tecnologias](#-tecnologias) •
[Pré-requisitos](#-pré-requisitos) •
[Instalação](#-instalação) •
[Estrutura](#-estrutura-do-projeto) •
[API](#-documentação-da-api)

</div>

---

## 📋 Sobre o Projeto

O **Portal IA** é uma solução corporativa completa para gerenciamento de projetos, desenvolvida com foco em escalabilidade, performance e experiência do usuário. O sistema oferece uma interface intuitiva para organização de projetos por categorias, com sistema robusto de autenticação e autorização.

### 🎯 Propósito

- **Centralizar** a gestão de projetos em uma plataforma unificada
- **Organizar** projetos através de categorias customizáveis
- **Controlar** acesso através de autenticação JWT segura
- **Escalar** facilmente com arquitetura containerizada
- **Monitorar** atividades e status de projetos em tempo real

---

## ✨ Características

### Funcionalidades Principais

- ✅ **Gerenciamento de Projetos**
  - Criação, edição e exclusão de projetos
  - Organização por categorias
  - Dashboard visual com métricas
  
- 🔐 **Sistema de Autenticação**
  - Login seguro com JWT
  - Proteção de rotas
  - Middleware de autorização
  
- 📊 **Categorização Inteligente**
  - Gerenciamento de categorias
  - Filtros e pesquisas avançadas
  - Visualização em cards intuitivos
  
- 🎨 **Interface Moderna**
  - Design responsivo
  - UI/UX otimizada
  - Componentes reutilizáveis

---

## 🛠️ Tecnologias

### Backend

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript |
| **Express** | 4.18.2 | Framework web |
| **PostgreSQL** | 15 | Banco de dados relacional |
| **JWT** | 9.0.0 | Autenticação e autorização |
| **node-pg-migrate** | 7.9.1 | Gerenciamento de migrações |
| **CORS** | 2.8.5 | Controle de acesso |

### Frontend

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **React** | 18.2.0 | Biblioteca UI |
| **Vite** | 4.3.9 | Build tool e dev server |
| **TailwindCSS** | 3.3.2 | Framework CSS utility-first |
| **React Router** | 6.30.1 | Roteamento SPA |
| **Axios** | 1.12.2 | Cliente HTTP |
| **HeadlessUI** | 2.2.9 | Componentes acessíveis |
| **Heroicons** | 2.2.0 | Ícones SVG |

### DevOps & Infraestrutura

- 🐳 **Docker** - Containerização
- 🐳 **Docker Compose** - Orquestração de containers
- 🔄 **Nodemon** - Hot reload no desenvolvimento
- 📦 **NPM** - Gerenciamento de dependências

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Docker** >= 20.10
- **Docker Compose** >= 2.0
- **Node.js** >= 18.0.0 (para desenvolvimento local)
- **NPM** >= 9.0.0

---

## 🚀 Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/dash-portal-IA.git
cd dash-portal-IA
```

### 2️⃣ Configure as variáveis de ambiente

O projeto já vem configurado com valores padrão no `docker-compose.yml`. Para produção, recomenda-se criar arquivos `.env` personalizados:

**Backend (.env)**
```env
DATABASE_URL=postgres://admin:admin@db:5432/postalservices-db
JWT_SECRET=your_super_secret_key_change_in_production
PORT=3001
NODE_ENV=production
```

**Frontend (.env)**
```env
VITE_API_BASE_URL=http://localhost:3002/api
```

### 3️⃣ Inicie a aplicação com Docker

```bash
# Iniciar todos os serviços
./dev.sh

# Ou manualmente
docker-compose up -d
```

### 4️⃣ Acesse a aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3002
- **PostgreSQL**: localhost:5433

### 5️⃣ Parar a aplicação

```bash
# Parar todos os serviços
./stop.sh

# Ou manualmente
docker-compose down
```

---

## 📁 Estrutura do Projeto

```
dash-portal-IA/
│
├── backend/                    # API REST Node.js
│   ├── src/
│   │   ├── config/            # Configurações (DB, etc)
│   │   ├── controllers/       # Controladores da API
│   │   ├── middleware/        # Middlewares (auth, etc)
│   │   ├── migrations/        # Migrações do banco
│   │   ├── routes/           # Definição de rotas
│   │   └── server.js         # Entry point do servidor
│   ├── Dockerfile
│   └── package.json
│
├── frontend/                   # Aplicação React
│   ├── src/
│   │   ├── api/              # Serviços de API
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── layouts/          # Layouts da aplicação
│   │   ├── pages/            # Páginas/Views
│   │   ├── router/           # Configuração de rotas
│   │   ├── App.jsx           # Componente raiz
│   │   └── main.jsx          # Entry point
│   ├── Dockerfile
│   └── package.json
│
├── data/                      # Volume do PostgreSQL
├── docs/                      # Documentação adicional
├── docker-compose.yml         # Orquestração de containers
├── dev.sh                     # Script para iniciar
├── stop.sh                    # Script para parar
└── README.md                  # Este arquivo
```

---

## 🔌 Documentação da API

### Autenticação

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "user",
  "password": "password"
}
```

### Projetos

```http
# Listar todos os projetos
GET /api/projects
Authorization: Bearer {token}

# Criar novo projeto
POST /api/projects
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Projeto Example",
  "description": "Descrição do projeto",
  "category_id": 1,
  "status": "active"
}

# Atualizar projeto
PUT /api/projects/:id
Authorization: Bearer {token}

# Deletar projeto
DELETE /api/projects/:id
Authorization: Bearer {token}
```

### Categorias

```http
# Listar categorias
GET /api/categories
Authorization: Bearer {token}

# Criar categoria
POST /api/categories
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Nova Categoria",
  "description": "Descrição"
}
```

---

## 🏗️ Arquitetura

### Princípios Aplicados

- ✅ **SOLID Principles** - Código modular e manutenível
- ✅ **Clean Code** - Código limpo e autodocumentado
- ✅ **Design Patterns** - Repository, Controller, Middleware
- ✅ **Separation of Concerns** - Camadas bem definidas
- ✅ **RESTful API** - Endpoints seguindo padrões REST

### Camadas da Aplicação

```
┌─────────────────────────────────────────┐
│           FRONTEND (React)               │
│  Components → Pages → Router → API      │
└──────────────────┬──────────────────────┘
                   │ HTTP/REST
┌──────────────────▼──────────────────────┐
│           BACKEND (Express)              │
│  Routes → Controllers → DB Config        │
└──────────────────┬──────────────────────┘
                   │ SQL
┌──────────────────▼──────────────────────┐
│         DATABASE (PostgreSQL)            │
│  Tables: projects, categories, users     │
└──────────────────────────────────────────┘
```

---

## 🔒 Segurança

### Implementações de Segurança

- 🔐 **JWT Authentication** - Tokens seguros para autenticação
- 🛡️ **CORS Configuration** - Controle de origem das requisições
- 🔑 **Password Hashing** - Senhas nunca armazenadas em texto plano
- 🚫 **SQL Injection Prevention** - Queries parametrizadas
- ✅ **Input Validation** - Validação de todas as entradas
- 🔒 **Environment Variables** - Dados sensíveis em variáveis de ambiente

### Boas Práticas

- Nunca commitar arquivos `.env` com dados reais
- Trocar `JWT_SECRET` em produção
- Usar HTTPS em produção
- Implementar rate limiting para APIs públicas
- Manter dependências atualizadas

---

## 🧪 Testes

### Executar Testes (Em desenvolvimento)

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

---

## 📈 Performance

### Otimizações Implementadas

- ⚡ **Lazy Loading** - Carregamento sob demanda
- 🎯 **Code Splitting** - Divisão de código no build
- 💾 **Database Indexing** - Índices otimizados no PostgreSQL
- 🔄 **Connection Pooling** - Pool de conexões do banco
- 📦 **Minification** - Código minificado em produção

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines de Código

- Siga os princípios SOLID
- Escreva código limpo e autodocumentado
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use commits semânticos (feat, fix, docs, etc)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

**MS Tech** - Desenvolvimento e Arquitetura

---

## 📞 Suporte

Para questões e suporte:

- 📧 Email: suporte@mstech.com.br
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/dash-portal-IA/issues)
- 📖 Docs: [Documentação Completa](./docs)

---

<div align="center">

**Desenvolvido com ❤️ pela equipe MS Tech**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
