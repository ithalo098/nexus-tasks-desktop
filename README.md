# Nexus Tasks Desktop

Aplicação de organização de tarefas com Kanban, Pomodoro, metas, anotações e backups.

## Estrutura

- [`package.json`](./package.json)

## Visão geral

O código e os materiais deste repositório estão organizados para consulta e evolução do projeto. As funcionalidades descritas refletem os arquivos presentes, sem pressupor uma publicação em produção.

## Tecnologias

- electron

## Documentação do projeto

# NEXUS TAREFAS AI - Grau Técnico Desktop

<div align="center">

[![Download Windows](https://img.shields.io/badge/Download_Livre-Windows_Port%C3%A1til-0ea5e9?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/ithalo098/nexus-tasks-desktop/releases/download/v1.0.0/Nexus_Tarefas_AI_Universal.zip)
[![Release](https://img.shields.io/github/v/release/ithalo098/teste?style=for-the-badge&color=10b981)](https://github.com/ithalo098/nexus-tasks-desktop/releases/tag/v1.0.0)
[![Status](https://img.shields.io/badge/Status-100%25_Offline-a855f7?style=for-the-badge)](https://github.com/ithalo098/nexus-tasks-desktop/releases/tag/v1.0.0)

### 📥 [CLIQUE AQUI PARA BAIXAR O EXECUTÁVEL GRÁTIS (.ZIP)](https://github.com/ithalo098/nexus-tasks-desktop/releases/download/v1.0.0/Nexus_Tarefas_AI_Universal.zip)
*(Funciona em qualquer PC com Windows sem precisar instalar Node.js ou dependências!)*

</div>

---

## ⚡ Como Usar a Versão Executável (.exe)
1. Baixe o pacote: **[Nexus_Tarefas_AI_Universal.zip](https://github.com/ithalo098/nexus-tasks-desktop/releases/download/v1.0.0/Nexus_Tarefas_AI_Universal.zip)**
2. Extraia os arquivos para qualquer pasta ou pendrive.
3. Dê dois cliques em **`Nexus Tarefas AI.exe`** (ou no **`iniciar.bat`**).
4. O aplicativo abre direto no Windows sem precisar de internet nem de programas adicionais!

## 🍎 Como Usar no MacBook (macOS)

O `.exe` do Windows **não abre no Mac**. No MacBook, use um dos dois jeitos abaixo:

### Jeito 1 — Rodar direto (mais rápido, para testar e desenvolver)
Precisa do [Node.js LTS](https://nodejs.org) instalado (baixe no site e instale).

```bash
# 1. Clonar o repositório
git clone https://github.com/ithalo098/nexus-tasks-desktop.git
cd nexus-tasks-desktop

# 2. Instalar dependências (baixa o Electron certo para o seu Mac:
# Intel ou Apple Silicon, M1/M2/M3/M4)
npm install

# 3. Abrir o app
npm start
```

Dica: depois de clonado, dá para abrir com dois cliques no arquivo **`iniciar.command`** — ele roda o `npm start` para você. (Na primeira vez, rode `chmod +x iniciar.command` no Terminal para deixar o arquivo executável.)

### Jeito 2 — Gerar o aplicativo `.dmg` (para instalar como app normal)
No MacBook, dentro da pasta do projeto:

```bash
npm run dist:mac
```

O instalador sai em `dist/Nexus Tarefas AI-1.0.0.dmg` (e também um `.zip`). Abra o `.dmg`, arraste o app para a pasta **Aplicativos** e pronto.

> ⚠️ O app ainda não tem assinatura da Apple: na primeira abertura o macOS pode dizer que o desenvolvedor não é verificado. Clique com o botão direito no app → **Abrir** → **Abrir** novamente. Depois disso ele abre normal. Para não ver mais esse aviso, é preciso assinar o app com uma conta Apple Developer (não é obrigatório para usar).

### Atalhos no Mac
- Recarregar: `Cmd + R` · Sair: `Cmd + Q` · DevTools: `Option + Cmd + I`
- Fechar a janela não encerra o app (padrão do Mac): ele continua no Dock, clique no ícone para reabrir.

---

## 👥 Integrantes do Projeto
- **Íthalo (ithalo098)**
- **Henrique (Henriquematsof)**
- **Trabalho desenvolvido no Grau Técnico - Disciplina de Desenvolvimento Desktop**

---

## 🌟 Recursos do Sistema
- **HUD 3D Moody Owl (Uiverse):** Indicadores holográficos dinâmicos com luzes orbitais e feixes de reflexo.
- **Ícones 3D Cyberpunk:** Ícones personalizados em alta definição para injeção de tarefas e selo de segurança quântica.
- **Tema Cyberpunk Permanente:** Modo escuro ultra moderno com contraste otimizado.
- **Efeitos Sonoros Web Audio:** Feedback sonoro sintético ao interagir com as diretrizes.
- **100% Offline:** Todas as bibliotecas do Bootstrap e ícones foram embutidas localmente no pacote.
- **Persistência de Dados:** Salva todas as tarefas no LocalStorage automaticamente.

---

## 🛠️ Executar Modo Desenvolvedor (Opcional com Node.js)

```bash
# 1. Clonar o repositório
git clone https://github.com/ithalo098/nexus-tasks-desktop.git
cd nexus-tasks-desktop

# 2. Instalar dependências
npm install

# 3. Executar o app Electron
npm start

# Ou abrir prévia web no navegador
npm run serve
# Acesse em http://localhost:3000
```
