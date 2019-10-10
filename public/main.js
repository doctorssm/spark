
const { app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { setMainMenu } = require('./main-menu');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, show: false });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, '../build/index.html'),
  //   protocol: 'file',
  //   slashes: true
  // }));
  // mainWindow.loadURL(url.format({
  //   pathname: 'localhost:3000',
  //   protocol: 'http',
  //   slashes: true
  // }));
  mainWindow.on('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => mainWindow = null);

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
