import './BoardSquare.css'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const Square = styled.div`
background-color: ${props => props.squareColour};
// `
// height: 120px;
// width: 120px;
// border: 3px solid black;
// display: flex;


// const Dark = styled.div`
// background-color: #9D8A24;
// text-align: center;
// padding-top: 80px;
// `

// const Black = styled.div`
// background-color: black;
// text-align: center;
// padding-top: 80px;
// `

const BoardSquare = ({x, y, id, hasRedPiece, hasBlackPiece, isEmpty, targetSquare}) => {

    // const [xPos, setXPos] = useState('')
    // const [yPos, setYPos] = useState('')
    // const [redPiece, setRedPiece] = useState(false)
    // const [blackPiece, setBlackPiece] = useState(false)
    // const [emptyPiece, setEmptyPiece] = useState(true)

    
    // useEffect(() => {
    //     setXPos(x)
    //     setYPos(y)
    //     setBlackPiece(hasBlackPiece)
    //     setRedPiece(hasRedPiece)
    //     setEmptyPiece(isEmpty)
        
    // }, [])
    // (x % 2 == 0 && y == 1  ? setRedPiece(hasRedPiece) : null)
    
    // const setRedRow = () => { x % 2 == 0 && y == 1  ? setRedPiece(true) : null}


    // const squareColour =  hasRedPiece ? 'red' : hasBlackPiece ? 'blue' : '#F7E47E';
    const squareClass = hasRedPiece ? 'red' : hasBlackPiece ? 'blue' : 'empty';

    return(

        <Square className = {squareClass} onClick={() => targetSquare(id)}>
            <></>
        </Square>
        // {x % 2 == !0 && y == 6? <Black>o</Black> : null}
        // {x % 2 == 0 && y == 7  ? <Black>o</Black> : null}
        // {x % 2 == !0 && y == 8 ? <Black>o</Black> : null}
    )
}

export default BoardSquare;