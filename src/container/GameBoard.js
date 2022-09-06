import React, { useEffect } from 'react';
import BoardSquare from '../components/BoardSquare';
import styled from 'styled-components';
import './GameBoard.css';
import useState from 'react-usestateref'

const BoardStyle = styled.div`
display: grid;
grid-template-columns: repeat(8, 100px);
grid-template-rows: repeat(8, 100px);
width: 800px;
height: 800px;
background-color: ${props => props.boardColour};
`;



const GameBoard = () => {

    const [board, setBoard] = useState([]);
    const [redPiece, setRedPiece] = useState(true);
    const [blackPiece, setBlackPiece] = useState(false);
    const [pieceState, setPieceState] = useState([
        ['b', '', 'b', '', '', '', 'r', ''],
        ['', 'b', '', '', '', 'r', '', 'r'],
        ['b', '', 'b', '', '', '', 'r', ''],
        ['', 'b', '', '', '', 'r', '', 'r'],
        ['b', '', 'b', '', '', '', 'r', ''],
        ['', 'b', '', '', '', 'r', '', 'r'],
        ['b', '', 'b', '', '', '', 'r', ''],
        ['', 'b', '', '', '', 'r', '', 'r'],
    ]);
    const [startSquare, setStartSquare, refStartSquare] = useState({});


    // const hasRedPiece = () => setRedPiece(false)
    // const hasBlackPiece = () => setBlackPiece(true)


    const targetSquare = (x, y) => {
        // console.log(`x = ${x}, y = ${y}, piece = ${pieceState[x][y]}`);
        const refSquare = refStartSquare.current
        if (refSquare.x) {
            //handle dest click
            //Get peice from origin
            const originPiece = pieceState[refSquare.x][refSquare.y];
            // Create copy of piece state to update it
            const destination = [...pieceState];
            // set new state of dest square to be what was in the origin square
            destination[x][y] = originPiece;
            // set origin to me emplty
            destination[refSquare.x][refSquare.y] = '';
            // console.log(destination);
            // update the state of the board with new piecestate
            setPieceState(destination);
            // clear the origin to be next players move
            setStartSquare({});
        } else {
            setStartSquare({ x, y });
        }
    };

// things hapening once and then not doing it again is usually due to state fucking us up


    useEffect(() => {
        let squares = [];
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 8; i2++) {
                squares.push(<BoardSquare x={i2} y={i} key={Math.random()} hasRedPiece={pieceState[i2][i] === "r"} hasBlackPiece={pieceState[i2][i] === "b"} isEmpty={true} targetSquare={targetSquare} />);
            }
        }
        setBoard(squares);
    }, [pieceState]); //renders on start but looks for pieceState to be changed and then triggers useEffect


    // const boardColour = redPiece ? 'red' : blackPiece ? 'blue' : '#F7E47E';
    const boardColour = '#F7E47E';

    return (
        <BoardStyle boardColour={boardColour}>
            {board}
        </BoardStyle>
    )

}

// onDoubleClick

export default GameBoard;