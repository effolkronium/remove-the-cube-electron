const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 1900,
    height: 1000 ,
    webPreferences: {
      nodeIntegration: true
    }
  })

  console.log(app.getPath('userData'))

  // и загрузить index.html приложения.
  win.loadFile('index.html')
}

app.on('ready', createWindow)