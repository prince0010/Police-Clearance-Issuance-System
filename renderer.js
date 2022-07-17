const { ipcRenderer } = require('electron')
const msgBtn = document.getElementById('loginn')

msgBtn.addEventListener('click', event => {
    // send message to the receiver
    // send message to the main process
    const reply = ipcRenderer.sendSync('send-sync-msg', 'Hello from the renderer process');
    console.log(reply);
    document.getElementById('syncMsg').innerHTML = reply;
});