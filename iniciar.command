#!/bin/sh
# Nexus Tarefas AI — abrir no Mac com dois cliques.
# (Equivale a rodar "npm start" dentro da pasta do projeto.)
cd "$(dirname "$0")" || exit 1

if ! command -v npm >/dev/null 2>&1; then
  osascript -e 'display dialog "O Node.js não está instalado no seu Mac.\n\nBaixe o Node.js LTS em https://nodejs.org e instale, depois clique de novo neste arquivo." with title "Nexus Tarefas AI" buttons {"OK"} default button "OK" with icon caution'
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Instalando dependências (só na primeira vez)..."
  npm install || exit 1
fi

npm start
