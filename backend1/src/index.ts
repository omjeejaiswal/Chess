
// websocket  in node.js

import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({port: 8080})

// inistailze the game manager
const gameManager = new GameManager();

wss.on('connection', function connection(ws){
  
  // ws.on('error', console.error);
  gameManager.addUser(ws)

  // ws.on('message', function message(data) {
  //   console.log('received: %s', data);
  // });

  // ws.send('e4 e5')
  ws.on("disconnect", () => gameManager.removeUser(ws))
});


