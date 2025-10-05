#!/bin/bash
# Este script para e remove todos os containers, redes e volumes definidos no docker-compose.

echo "Parando o ambiente de desenvolvimento..."
docker-compose down --volumes
echo "Ambiente parado com sucesso!"
