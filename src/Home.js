import Chessboard from "chessboardjsx";

// import { ChessInstance } from "chess.js";
import { useState } from "react";
const Chess = require("chess.js")

export default function Home(){

    const [chess] = useState(
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
    );

    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move) => {
        console.log(move.from);
        console.log(move.to);
        
        if (chess.move(move)) {
            setTimeout(() => {
            const moves = chess.moves();

            if (moves.length > 0) {
                const computerMove = moves[Math.floor(Math.random() * moves.length)];
                chess.move(computerMove);
                console.log(chess.ascii());
                setFen(chess.fen());
            }
            }, 300);

            setFen(chess.fen());
        }
    };
    return(
        <div 
        style={{margin:'2% auto auto 12%'}}
        >
        <h1 style={{paddingLeft:'8%'}}>Play Chess</h1>
        <Chessboard
        width={300}
        position={fen}
        onDrop={(move) => handleMove({from: move.sourceSquare, to: move.targetSquare, promotion: "q",})}
        />
        </div>
    );
}