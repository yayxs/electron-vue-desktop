const { ipcMain ,BrowserWindow} =require('electron')

// 获取当前的窗口对象
let mainWin = BrowserWindow.getFocusedWindow()
// 最小
ipcMain.on('window-min',()=>{
    console.log(`最小化`)
    mainWin.minimize()
})
// 最大化
ipcMain.on('window-max',()=>{
    console.log(`最大化`)
    if(mainWin.isMaximized()){
        mainWin.restore()
    }else{
        mainWin.maximize()
    }
})
// 关闭
ipcMain.on('window-close',()=>{
    mainWin.close()
})
ipcMain.on('to-main',(e,data)=>{
    console.log(e)
    console.log(data)
})