// Processo principal do Electron (main.js)
// Responsavel por criar a janela nativa do sistema operacional
// Funciona no Windows, no Linux e no macOS (MacBook).
const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin';

let janelaPrincipal = null;

function criarJanela() {
  janelaPrincipal = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 850,
    minHeight: 600,
    title: 'NEXUS TAREFAS AI - Grau Técnico Desktop',
    backgroundColor: '#07070a',
    // No macOS a barra de menu fica no topo da tela e nao pode ser
    // escondida por janela; no Windows/Linux ela some ate apertar Alt.
    autoHideMenuBar: !isMac,
    icon: path.join(__dirname, 'assets', 'icons', 'app-icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  janelaPrincipal.loadFile(path.join(__dirname, 'index.html'));

  janelaPrincipal.on('closed', () => {
    janelaPrincipal = null;
  });

  // No Mac nao existe tecla F12: DevTools abre com Option + Command + I.
  const atalhoDevTools = isMac ? 'Alt+Command+I' : 'F12';

  const templateMenu = [];

  // No macOS o primeiro menu e sempre o menu do app (nome, Sobre,
  // Esconder, Sair). Sem ele o app fica sem o menu padrao do Mac.
  if (isMac) {
    templateMenu.push({
      label: app.name,
      submenu: [
        { role: 'about', label: 'Sobre o Nexus Tarefas AI' },
        { type: 'separator' },
        { role: 'services', label: 'Serviços' },
        { type: 'separator' },
        { role: 'hide', label: 'Esconder Nexus Tarefas AI' },
        { role: 'hideOthers', label: 'Esconder Outros' },
        { role: 'unhide', label: 'Mostrar Tudo' },
        { type: 'separator' },
        { role: 'quit', label: 'Sair do Nexus Tarefas AI' }
      ]
    });
  }

  templateMenu.push(
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Recarregar',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            if (janelaPrincipal) janelaPrincipal.reload();
          }
        },
        {
          label: 'Ferramentas de Desenvolvedor',
          accelerator: atalhoDevTools,
          click: () => {
            if (janelaPrincipal) janelaPrincipal.webContents.toggleDevTools();
          }
        },
        { type: 'separator' },
        // No Mac o "Sair" ja esta no menu do app; aqui ele so aparece
        // no Windows/Linux.
        ...(isMac ? [] : [{
          label: 'Sair',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }])
      ]
    },
    {
      label: 'Visualizar',
      submenu: [
        { role: 'resetZoom', label: 'Tamanho Padrao' },
        { role: 'zoomIn', label: 'Aumentar Zoom' },
        { role: 'zoomOut', label: 'Diminuir Zoom' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Tela Cheia' }
      ]
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Sobre o Projeto',
          click: () => {
            dialog.showMessageBox(janelaPrincipal, {
              type: 'info',
              title: 'Sobre o Nexus Tarefas AI',
              message: 'NEXUS TAREFAS AI - Edição Desktop',
              detail: 'Desenvolvido para Grau Técnico por ithalo098.\nInterface Futurista 100% Offline e Portátil.'
            });
          }
        }
      ]
    }
  );

  const menu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  criarJanela();

  // No macOS clicar no icone do Dock reabre a janela (padrao do Mac).
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      criarJanela();
    }
  });
});

// No macOS o app continua aberto no Dock mesmo sem janela (padrao do Mac);
// no Windows/Linux fechar a ultima janela encerra o app.
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
