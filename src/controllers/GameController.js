squares.push(<BoardSquare 
    x={refBoardInfo.current[i].x} 
    y={refBoardInfo.current[i].y} 
    id ={refBoardInfo.current[i].id} 
    key={Math.random()} 
    hasRedPiece={refBoardInfo.current[i].hasRedPiece} 
    hasBlackPiece={refBoardInfo.current[i].hasBlackPiece} 
    isEmpty={refBoardInfo.current[i].isEmpty} 
    targetSquare={refBoardInfo.current[i].targetSquare} />)




    

    export const hasBlackPiece = (square) => {
        return(square.blackPiece)
    }
    
    export const hasRedPiece = (square) => {
        return(square.redPiece)
    }
    
    export const isEmpty = (square) => {
        return(square.empty)
    }