"use strict";
// import { WebSocket } from "ws";
// import { Game } from "./Game";
// import { MOVE, INIT_GAME } from "./message";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const message_1 = require("./message");
const Game_1 = require("./Game");
class GameManager {
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }
    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter(user => user !== socket);
    }
    addHandler(socket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            console.log("Received message:", message);
            if (message.type === message_1.INIT_GAME) {
                console.log("INIT_GAME message received");
                if (this.pendingUser) {
                    console.log("Starting a new game");
                    const game = new Game_1.Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    console.log("Setting pending user");
                    this.pendingUser = socket;
                }
            }
            if (message.type === message_1.MOVE) {
                console.log("MOVE message received");
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if (game) {
                    console.log("Game found, making move:", message.move);
                    game.makeMove(socket, message.move);
                }
                else {
                    console.log("No game found for the move");
                }
            }
        });
    }
}
exports.GameManager = GameManager;
