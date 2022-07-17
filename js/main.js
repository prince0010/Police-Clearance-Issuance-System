// Modules to control application life and create native browser window
// const { app, BrowserWindow } = require('electron')

// Create the browser window.
// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 700,
//         height: 500,
//         frame: true,
//         autoHideMenuBar: true,
//         icon: './img/electron.ico'
//     })
    // Loading the index.html of the app.
//     win.loadFile('./index.html')
// }
// createWindow.oncase('ready-')
// Initialization and is ready to create browser windows.
// app.whenReady().then(() => {
//     createWindow()
// })

// Quit when all windows are closed,
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })

const {app, BrowserWindow, ipcMain} = require('electron');
// const { truncateSync } = require('original-fs');



let mainwin = null;

app.on('ready', () =>{
    console.log('Hello World');
    mainwin = new BrowserWindow({
        width: 700,
        height: 500,
        maxWidth:700,
        maxHeight:500,
        minHeight:400,
        minWidth:400,
        frame: true,
        movable: true,
        // resizable: false,
        // alwaysontop ipa stay ni perme ang broswer window sa middle og dili sya muadto sa
        // back pag mag click another brosewr pwede ni ma false pag gusto nimo ma likod balik
        // alwaysOnTop: true,
        backgroundColor: '#FFF',
        autoHideMenuBar: true,
        show: false,
        title: 'Login',
        // titleBarStyle: 'hiddenInset'
    });
    mainwin.loadFile('./index.html')

    // after maka login ang user kani na browser panel mugawas
    
    // let mainPanel = new BrowserWindow({
    //     width: 600,
    //     height: 900,
    //     frame: true,
    //     movable: true,
    //     resizable: true,
    //     backgroundColor: '#FFF',
    //     title: 'Police Clearance Issuance System',
    //     show: false,
    // });

    // mainPanel.loadFile('./panels/clerkpanel.html')

    mainwin.once('ready-to-show', ()=>{
        mainwin.show()
        // mainPanel.maximize()
        // mainPanel.show()
    });

    // automatically open the dev tools to see the rendering, you can delete it after
    // mainwin.webContents.openDevTools();


    mainwin.on('close', ()=>{
        mainwin = null;
    });
    
    // function clerkwindow(){
    // }

    // mainPanel.on('close', ()=>{
    //     mainPanel = null;
    // });

        // TRYING TO FIX THE IPCMAIN HOW TO RECEIVE MESSAGES TO RENDERER JS
        // AND MAIN JS
    // ipcMain.on('send-sync-msg', (event, args) => {
    //      //returning a reply to the renderer js
    //     console.log(args);   
    //     event.returnValue = 'I am sending this to the main process js';
    // });
  
    app.on("activate", function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
        if(BrowserWindow.getAllWindows().length === 0)
        mainwin();
    });
})
    // app.whenReady().then(() => {
    //     mainwin()
    // })

   

// Quit when all windows are closed,
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

