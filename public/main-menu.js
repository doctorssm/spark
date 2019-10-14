const { app, Menu } = require('electron');
const isWindows = process.platform === 'win32';

module.exports = {
  setMainMenu
};

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
          label: 'Отметить как непрочитанное',
          accelerator: isWindows ? 'Ctrl+U' : 'CmdOrU',
          click: () => mainWindow.webContents.send('action', 'toggleRead')
        },
        {
          type: 'separator'
        },
        {
          label: 'Удалить',
          accelerator: isWindows ? 'Ctrl+D' : 'CmdOrD',
          click: () => mainWindow.webContents.send('action', 'delete') // showConfirmDeleteDialog(mainWindow)
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
