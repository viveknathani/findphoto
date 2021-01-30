const { app, BrowserWindow } = require('electron');

function createWindow() 
{
  const options = {
    width: 1366,
    height: 768,
    webPreferences: { nodeIntegration: true }
  }
  const win = new BrowserWindow(options);
  win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') 
  {
    app.quit();
  }
});

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0) 
  {
    createWindow();
  }
});