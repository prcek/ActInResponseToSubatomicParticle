
var ipcRenderer = null;

if (window.hasOwnProperty("require")) {
    const electron = window.require('electron');
    ipcRenderer = electron.ipcRenderer;
} else {
    console.log("electron Ipc disabled")
}

function testipc() {
    if (ipcRenderer) {
        ipcRenderer.send('data',{req:"abc"});
    }
}


export default testipc;