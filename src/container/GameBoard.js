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
    const [redPiece, setRedPiece] = useState(false)
    const [blackPiece, setBlackPiece] = useState(false)
    

    // const hasRedPiece = () => setRedPiece(false)
    // const hasBlackPiece = () => setBlackPiece(true)

    useEffect(() => {
        let squares = [];
        for(let i = 1; i < 9; i++){
            for(let i2 = 1; i2 < 9; i2++){
                squares.push(<BoardSquare x={i2} y={i} key={Math.random()}  hasRedPiece={false} hasBlackPiece={false} isEmpty={true}/>)
            }
        }
        setBoard(squares)
    }, [])

    const boardColour = redPiece ? 'red' : blackPiece ? 'blue' : '#F7E47E'

    return(
        <BoardStyle boardColour={boardColour}>
        {board}
        </BoardStyle>
    )

}

export default GameBoard;