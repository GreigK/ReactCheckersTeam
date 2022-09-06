import React, {useState, useEffect} from 'react';
import BoardSquare from '../components/BoardSquare';
import styled from 'styled-components';
import './GameBoard.css'

const BoardStyle = styled.div`
display: grid;
grid-template-columns: repeat(8, 100px);
grid-template-rows: repeat(8, 100px);
width: 800px;
height: 800px;
background-color: ${props => props.boardColour};
`



const GameBoard = () => {

    const [board, setBoard] = useState([])
    const [redPiece, setRedPiece] = useState(true)
    const [blackPiece, setBlackPiece] = useState(false)
    const [pieceState, setPieceState] = useState([
        ['b', '', 'b' ,'','', 'r', '' ,'r'],
        ['', 'b', '' ,'','', 'r', '' ,'r'],
        ['b', '', 'b' ,'','', 'r', '' ,'r'],
        ['', 'b', '' ,'','', 'r', '' ,'r'],
        ['b', '', 'b' ,'','', 'r', '' ,'r'],
        ['', 'b', '' ,'','', 'r', '' ,'r'],
        ['b', '', 'b' ,'','', 'r', '' ,'r'],
        ['', 'b', '' ,'','', 'r', '' ,'r'],
    ])
    
    

    // const hasRedPiece = () => setRedPiece(false)
    // const hasBlackPiece = () => setBlackPiece(true)

    useEffect(() => {
        let squares = [];
        for(let i = 0; i < 8; i++){
            for(let i2 = 0; i2 < 8; i2++){
                squares.push(<BoardSquare x={i2} y={i} key={Math.random()}  hasRedPiece={pieceState[i2][i] === "r"} hasBlackPiece={pieceState[i2][i] === "b"} isEmpty={true} targetSquare={targetSquare}/>)
            }
        }
        setBoard(squares)
    }, [])

    const targetSquare = (x, y) => {
        console.log(`x = ${x}, y = ${y}, piece = ${pieceState[x][y]}`);
    }

    // const boardColour = redPiece ? 'red' : blackPiece ? 'blue' : '#F7E47E';
    const boardColour = '#F7E47E'

    return(
        <BoardStyle boardColour={boardColour}>
        {board}
        </BoardStyle>
    )

}

export default GameBoard;