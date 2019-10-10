const { app, Menu } = require('electron');
const isWindows = process.platform === 'win32';
const { showConfirmDeleteDialog, showSaveDialog } = require('./dialogs');

module.exports = { setMainMenu };

function setMainMenu(mainWindow) {
  const template = [
    {
      label: isWindows ? 'Файл' : app.getName(),
      submenu: [
        {
          label: 'Новое письмо',
          accelerator: isWindows ? 'Ctrl+N' : 'CmdOrN',
          click: () => null
        },
        {
          type: 'separator'
        },
        {
          label: isWindows ? 'Закрыть окно' : `Завершить ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'Сообщение',
      submenu: [
        {
          label: 'Отметить как непрочитанное', // TODO: toggle text depends os status read && disable it if active email is not set
          accelerator: isWindows ? 'Ctrl+U' : 'CmdOrU',
          click: () => null
        },
        {
          type: 'separator'
        },
        {
          label: 'Сохранить',
          accelerator: isWindows ? 'Ctrl+S' : 'CmdOrS',
          click: () => showSaveDialog(mainWindow)
        },
        {
          label: 'Удалить',
          accelerator: isWindows ? 'Ctrl+D' : 'CmdOrD', // TODO: add correct shortcuts for MAc
          click: () => showConfirmDeleteDialog(mainWindow) // TODO: depends on page: dialog or remove action
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
