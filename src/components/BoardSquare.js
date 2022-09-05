import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const Square = styled.div`
display: grid;
grid-template-columns: repeat(8, 100px);
grid-template-rows: repeat(8, 100px);
width: 800px;
height: 800px;
background-color: green;
`

const Dark = styled.div`
background-color: #9D8A24;
text-align: center;
padding-top: 80px;
`

// const Black = styled.div`
// background-color: black;
// text-align: center;
// padding-top: 80px;
// `

const BoardSquare = ({x, y, hasRedPiece, hasBlackPiece, isEmpty}) => {

    const [xPos, setXPos] = useState('')
    const [yPos, setYPos] = useState('')
    const [redPiece, setRedPiece] = useState(false)
    const [blackPiece, setBlackPiece] = useState(false)
    const [emptyPiece, setEmptyPiece] = useState(true)

    
    useEffect(() => {
        setXPos(x)
        setYPos(y)
        setBlackPiece(hasBlackPiece)
        setRedPiece(hasRedPiece)
        setEmptyPiece(isEmpty)
        
    }, [])
    // (x % 2 == 0 && y == 1  ? setRedPiece(hasRedPiece) : null)
    
    // const setRedRow = () => { x % 2 == 0 && y == 1  ? setRedPiece(true) : null}


    return(
        // <div>
        // {/* <Square>X={x}, Y={y}, hasRed={hasRedPiece.toString()}, hasBlack={hasBlackPiece.toString()}, hasAMine={hasMine.toString()}, hasBeenDestroyed={beenDestroyed.toString()}</Square> */}
        // </div>
        <div>
            {x % 2 == 0 && y == 1  ? <Dark>.</Dark> : null}
            {x % 2 == !0 && y == 2? <Dark>.</Dark> : null}
            {x % 2 == 0 && y == 3 ? <Dark>.</Dark> : null}
            {x % 2 == !0 && y == 4 ? <Dark>.</Dark> : null}
            {x % 2 == 0 && y == 5 ? <Dark>.</Dark> : null}
            {x % 2 == !0 && y == 6? <Dark>.</Dark> : null}
            {x % 2 == 0 && y == 7  ? <Dark>.</Dark> : null}
            {x % 2 == !0 && y == 8 ? <Dark>.</Dark> : null}
        </div>
        // {x % 2 == !0 && y == 6? <Black>o</Black> : null}
        // {x % 2 == 0 && y == 7  ? <Black>o</Black> : null}
        // {x % 2 == !0 && y == 8 ? <Black>o</Black> : null}
    )
}

export default BoardSquare;