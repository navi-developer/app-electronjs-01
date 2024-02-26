const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',//borra la barra de titulo
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
