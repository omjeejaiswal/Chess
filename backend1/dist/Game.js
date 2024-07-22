"use strict";
// import { WebSocket } from "ws";
// import { Chess } from 'chess.js';
// import { GAME_OVER, INIT_GAME, MOVE } from "./Message";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const Message_1 = require("./Message");
class Game {
    constructor(player1, player2) {
        this.moveCount = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type: Message_1.INIT_GAME,
            payload: {
                color: "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type: Message_1.INIT_GAME,
            payload: {
                color: "black"
            }
        }));
    }
    makeMove(socket, move) {
        console.log(`Attempting to make move: ${JSON.stringify(move)} by player: ${socket === this.player1 ? "player1" : "player2"}`);
        // Ensure the correct player is making the move
        const turn = this.board.turn() === 'w' ? this.player1 : this.player2;
        if (socket !== turn) {
            console.log("Invalid move: Not the correct player's turn");
            socket.send(JSON.stringify({
                type: "INVALID_MOVE",
                payload: {
                    message: "Not your turn"
                }
            }));
            return;
        }
        console.log("Move validation passed, processing move");
        try {
            const result = this.board.move(move);
            if (!result) {
                console.log("Invalid move");
                socket.send(JSON.stringify({
                    type: "INVALID_MOVE",
                    payload: {
                        message: "Invalid move"
                    }
                }));
                return;
            }
        }
        catch (e) {
            console.log(`Error making move: ${e}`);
            socket.send(JSON.stringify({
                type: "INVALID_MOVE",
                payload: {
                    message: "Invalid move"
                }
            }));
            return;
        }
        console.log("Move succeeded");
        // Notify both players about the move
        const moveMessage = JSON.stringify({
            type: Message_1.MOVE,
            payload: move
        });
        this.player1.send(moveMessage);
        this.player2.send(moveMessage);
        // Check if the game is over
        if (this.board.isGameOver()) {
            console.log("Game over detected");
            const winner = this.board.turn() === "w" ? "black" : "white";
            const gameOverMessage = JSON.stringify({
                type: Message_1.GAME_OVER,
                payload: {
                    winner
                }
            });
            this.player1.send(gameOverMessage);
            this.player2.send(gameOverMessage);
            return;
        }
    }
}
exports.Game = Game;
