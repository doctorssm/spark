const { app, dialog, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

module.exports = {
  showConfirmDeleteDialog,
  showSaveDialog
};

function showConfirmDeleteDialog(browserWindow) {
  dialog.showMessageBox(
    browserWindow,
    {
      type: 'info',
      icon: nativeImage.createFromPath('./assets/spark-logo.png'),
      message: 'Внимание',
      detail: 'Удалить это сообщение?',
      buttons: ['Да', 'Нет'],
      defaultId: 0
    },
    (clickedIndex) => {
      console.log(clickedIndex);
    }
  );
}

function showSaveDialog(browserWindow, data) {
  dialog.showSaveDialog(
    browserWindow,
    {
      defaultPath: path.join(app.getPath('downloads'), 'email.txt')
    },
    (fileName) => {
      if (fileName) {
        fs.writeFile(fileName, data, 'utf8', (err) => {
          if (err) {
            dialog.showErrorBox('Возникла ошибка при сохранении письма', err.message);
          }
        });
      }
    }
  );
}
