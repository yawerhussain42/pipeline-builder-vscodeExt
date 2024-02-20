const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  appWindow: (args) => ipcRenderer.send(args),
});
