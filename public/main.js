const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { setMainMenu } = require('./main-menu');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1150,
    height: 680,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const endpoint = url.format({
    pathname: isDev ? 'localhost:3000' : path.join(__dirname, '../build/index.html'),
    protocol: isDev ? 'http' : 'file',
    slashes: true
  });

  mainWindow.loadURL(endpoint);

  mainWindow.on('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => (mainWindow = null));

  setMainMenu(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
