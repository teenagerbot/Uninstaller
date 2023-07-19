const { app, BrowserWindow } = require('electron');
const window = require('electron').BrowserWindow;
require('@electron/remote/main').initialize();
const path = require('path');
var exec = require('child_process').exec;
exec('NET SESSION', function (err, so, se) {
    const Admin = se.length === 0 ? 'admin' : 'not admin';
    if (Admin != "admin") {
        app.quit();
    }
})
let mainWindow;
let loadWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 366,
        height: 60,
        autoHideMenuBar: true,
        resizable: true,
        frame: false,
        movable: false,
        skipTaskbar: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            webviewTag: true,
            devTools: true,
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