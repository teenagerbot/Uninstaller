const { app, BrowserWindow } = require('electron');
const window = require('electron').BrowserWindow;
require('@electron/remote/main').initialize();
const path = require('path');
let mainWindow;
let loadWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 366,
        height: 60,
        autoHideMenuBar: true,
        resizable: false,
        frame: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            webviewTag: true,
            devTools: false,
        },
        icon: path.join(__dirname, 'icon.ico'),
    });
    mainWindow.setAlwaysOnTop(true, 'pop-up-menu');
    require('@electron/remote/main').enable(mainWindow.webContents);
    mainWindow.loadFile('main/updater.html');
}
app.whenReady().then(() => {
    createWindow();
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit();
    });

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});