const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    if (isDev) {
        // Desarrollo: carga React desde el servidor local
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    } else {
        // Producción: carga el HTML generado en build/
        win.loadFile(path.join(__dirname, 'build', 'index.html'));
        // DevTools activado temporalmente para ver errores de producción
        win.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);

// Manejo para macOS y otros sistemas
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
