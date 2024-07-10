"use strict";
// websocket  in node.js
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// inistailze the game manager
const gameManager = new GameManager_1.GameManager();
wss.on('connection', function connection(ws) {
    // ws.on('error', console.error);
    gameManager.addUser(ws);
    // ws.on('message', function message(data) {
    //   console.log('received: %s', data);
    // });
    // ws.send('e4 e5')
    ws.on("disconnect", () => gameManager.removeUser(ws));
});
