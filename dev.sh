#!/bin/bash
# Este script constrói e inicia os serviços Docker em modo detached.
#
# Uso:
#   ./dev.sh        - Inicia TODOS os serviços (db, backend, frontend).
#   ./dev.sh <nome> - Inicia ou reinicia um serviço específico (ex: ./dev.sh frontend).

SERVICE=$1

if [ -z "$SERVICE" ]; then
  echo "Iniciando o ambiente de desenvolvimento completo..."
  docker-compose up --build -d
  echo "Ambiente completo iniciado!"
else
  echo "Iniciando/Reiniciando o serviço '$SERVICE'..."
  docker-compose up --build -d --no-deps $SERVICE
  echo "Serviço '$SERVICE' iniciado!"
fi

echo ""
echo "----------------------------------------"
echo "  Ambiente Pronto!"
echo "----------------------------------------"
echo "Frontend (React): http://localhost:5173"
echo "Backend (API):    http://localhost:3002"
echo "----------------------------------------"

