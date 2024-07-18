import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";



export const ChessBoard = ({board, socket} : {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color

    } | null)[][]
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);
    const[to, setTo] = useState<null | Square>(null);

    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div key={i} className="flex ">
                {row.map((square, j) => {
                    const sqaureRepresentation = String.fromCharCode(65 + (j%8)) + "" + 
                       (8 - Math.floor(( i + j)/8)) as Square;
                    
                    return <div onClick={() => {
                        if(!from) {
                            setFrom(sqaureRepresentation);
                        }
                        else{
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    from,
                                    to: sqaureRepresentation
                                }
                            }))
                            setFrom(null)
                            console.log({
                                from,
                                to: sqaureRepresentation
                            })
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 ===0 ? 'bg-green-500 ' : 'bg-white'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex-col">
                            {square ? square.type: ""}
                            </div>
                        </div>
                    </div>
                })}

            </div>
        })}
    </div>
}









