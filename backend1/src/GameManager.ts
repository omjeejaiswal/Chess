
// import { WebSocket } from "ws";
// import { Game } from "./Game";
// import { MOVE, INIT_GAME } from "./message";

// //User, Game

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
//         this.users.push(socket);
//         this.addHandler(socket);
//     }

//     removeUser(socket: WebSocket) {
//         this.users = this.users.filter(user => user !== socket);
//         // Stop the game here because the user left
//     }

//     private addHandler(socket: WebSocket) {
//         socket.on("message", (data) => {
//             const message = JSON.parse(data.toString());

//             if(message.type === INIT_GAME) {
//                 if(this.pendingUser) {
//                     // strat a game
//                     const game = new Game(this.pendingUser, socket)
//                     this.games.push(game);
//                     this.pendingUser = null;
//                 }
//                 else{
//                     this.pendingUser = socket;
//                 }
//             }
            
//             if(message.type === MOVE) {
//                 console.log("inside move")
//                 const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
//                 if(game) {
//                     console.log("inside make move")
//                     game.makeMove( socket , message.move)
//                 }
//             }
//         })
//     }
// } 



// import { WebSocket } from "ws";
// import { INIT_GAME, MOVE } from "./message";
// import { Game } from "./Game";

// export class GameManager() {
//     private games: Game[];
//     private pendingUser: WebSocket;
//     private users: WebSocket[];

//     constructor() {
//         this.games = [];
//     }

//     addUser(socket: WebSocket) {
//         this.users.push(socket);
//         this.addHandler(socket);
//     }

//     removeUser(socket: WebSocket){
//         this.users = this.users.filter(user => user !== socket);
//     }

//     private addHandler(socket: WebSocket) {
//         socket.on("message", (data) => {
//             const message = JSON.parse(data.toString())

//             if(message.type === INIT_GAME){
//                 if(this.pendingUser) {
//                     // start a game
//                     const game = new Game(this.pendingUser, socket)
//                     this.games.push(game);
//                     this.pendingUser = null
//                 }
//                 else{
//                     this.pendingUser = socket;
//                 }
//             }

//             if(message.type === MOVE) {
//                 const game = this.games.find(game.player1 === socket || game.palyer2 === socket);
//                 if(game) {
//                     game.makeMove(socket, message.move)
//                 }
//             }
//         })
//     }
// }





import { WebSocket } from "ws";
import { INIT_GAME, MOVE } from "./message";
import { Game } from "./Game";

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
            console.log("Received message:", message);

            if (message.type === INIT_GAME) {
                console.log("INIT_GAME message received");
                if (this.pendingUser) {
                    console.log("Starting a new game");
                    const game = new Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                } else {
                    console.log("Setting pending user");
                    this.pendingUser = socket;
                }
            }

            if (message.type === MOVE) {
                console.log("MOVE message received");
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if (game) {
                    console.log("Game found, making move:", message.move);
                    game.makeMove(socket, message.move);
                } else {
                    console.log("No game found for the move");
                }
            }
        });
    }
}
