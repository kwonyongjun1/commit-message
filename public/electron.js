const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1800,
    height: 1000,
    minWidth: 1100,
    minHeight: 800,
    icon: path.join(__dirname, '/public/icon/favicon.png'),
    webPreferences: {
      nodeIntegration: false
    }
  });
  
  win.loadURL(path.join('https://kwonyongjun1.github.io/commit-message/'));

  if (process.platform !== 'darwin') {
    win.removeMenu();
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
