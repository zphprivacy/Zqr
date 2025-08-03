const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),
  saveFile: (filePath, buffer) => ipcRenderer.invoke('save-file', filePath, buffer),
  onSaveQRCode: (callback) => ipcRenderer.on('save-qr-code', callback),
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
});
