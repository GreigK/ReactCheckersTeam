import React, {useState, useEffect} from 'react';
import BoardSquare from '../components/BoardSquare';
import styled from 'styled-components';

const BoardStyle = styled.div`
display: grid;
grid-template-columns: repeat(8, 100px);
grid-template-rows: repeat(8, 100px);
width: 800px;
height: 800px;
background-color: #F7E47E;
`

const GameBoard = ({x, y, setRedPiece}) => {

    const [board, setBoard] = useState([])

    const hasRedPiece =  (x % 2 == 0 && y == 1  ? null : true)

    useEffect(() => {
        let squares = [];
        for(let i = 1; i < 9; i++){
            for(let i2 = 1; i2 < 9; i2++){
                squares.push(<BoardSquare x={i2} y={i} key={Math.random()}  hasRedPiece={hasRedPiece} hasBlackPiece={false} hasMine={false} beenDestroyed={false}/>)
            }
        }
        setBoard(squares)
    }, [])

    

    return(
        <BoardStyle>
        {board}
        </BoardStyle>
    )

}

export default GameBoard;