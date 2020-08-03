const { ipcMain } =require('electron')

ipcMain.on('to-main',(e,data)=>{
    console.log(e)
    console.log(data)
})