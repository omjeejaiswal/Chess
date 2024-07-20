




// import { WebSocket } from "ws";
// import { Game } from "./Game";
// import { INIT_GAME, MOVE } from "./Message";

// export class GameManager {
//     private games: Game[];
//     private pendingUser: WebSocket | null;
//     private users: WebSocket[];

//     constructor() {
//         this.games = [];
//         this.pendingUser = null;
//         this.users = [];
//     }

//     addUser(socket: WebSocket) {
//         console.log("Adding new user");
//         this.users.push(socket);
//         this.addHandler(socket);
//     }

//     removeUser(socket: WebSocket) {
//         console.log("Removing user");
//         this.users = this.users.filter(user => user !== socket);
//     }

//     private addHandler(socket: WebSocket) {
//         socket.on("message", (data) => {
//             const message = JSON.parse(data.toString());
//             console.log(`Received message: ${JSON.stringify(message)} from user: ${socket}`);

//             if (message.type === INIT_GAME) {
//                 console.log("INIT_GAME received");
//                 if (this.pendingUser) {
//                     console.log("Pairing users for a new game");
//                     const game = new Game(this.pendingUser, socket);
//                     this.games.push(game);
//                     this.pendingUser = null;
//                 } else {
//                     console.log("Setting pending user");
//                     this.pendingUser = socket;
//                 }
//             }

//             if (message.type === MOVE) {
//                 console.log("MOVE received");
//                 const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
//                 if (game) {
//                     console.log("Found game for user, making move");
//                     game.makeMove(socket, message.payload.move);
//                 } else {
//                     console.log("Game not found for user");
//                 }
//             }
//         });

//         socket.on("close", () => {
//             console.log("User disconnected");
//             this.removeUser(socket);
//         });
//     }
// }



import { WebSocket } from "ws";
import { Game } from "./Game";
import { INIT_GAME, MOVE } from "./Message";

// user, game

export class GameManager {
    private games: Game[];
    private pendingUser: WebSocket | null;
    private users: WebSocket[];

    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }

    addUser(socket: WebSocket) {
        this.users.push(socket);
        this.addHandler(socket);
    }

    removeUser(socket: WebSocket) {
        this.users = this.users.filter(user => user !== socket);
    }

    private addHandler(socket: WebSocket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());

                if (message.type === INIT_GAME) {
                    if (this.pendingUser) {
                    const game = new Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else{
                    this.pendingUser = socket;
                }
            }

            if(message.type === MOVE) {
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if(game) {
                    console.log("inside makemove");
                    game.makeMove(socket, message.payload.move);
                }
            }
        })
    }
}








































