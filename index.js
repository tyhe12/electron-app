const { app, BrowserWindow } = require('electron');

let win = null;

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: 'hidden',
		frame: false
	});

	// and load the index.html of the app.
	win.loadFile('index.html');

	// win.webContents.openDevTools();
	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
