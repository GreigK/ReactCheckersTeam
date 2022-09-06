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

    const [boardInfo, setBoardInfo, refBoardInfo] = useState([]); // renders te board with the board elements, most up to date, will change on ever move and render to display that
    const [boardElements, setBoardElements, refBoardElements] = useState([])  // the information that is held in each square eg, x,y, colour etc
    // const [redPiece, setRedPiece] = useState(true);
    // const [blackPiece, setBlackPiece] = useState(false);
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
    const [startSquare, setStartSquare, refStartSquare] = useState(null);
    const [endSquare, setEndSquare, refEndSquare] = useState(null);



    // const hasRedPiece = () => setRedPiece(false)
    // const hasBlackPiece = () => setBlackPiece(true)


    const targetSquare = (searchId) => {
        console.log(searchId);
        console.log(refBoardInfo.current[searchId].hasRedPiece)
        let found = refBoardInfo.current[searchId]
        if(refStartSquare.current === null){
            setStartSquare(found)
        }else{
            setEndSquare(found)
        }
        // let newInfoArray = [...refBoardInfo.current]
        // newInfoArray[searchId].hasRedPiece = false;
        // newInfoArray[searchId].hasBlackPiece = true;
        // setBoardInfo(newInfoArray)



    };

    useEffect(() => {
        let squares = [];
        let elements = []
        let id = 0;
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 8; i2++) {
                squares.push({
                     "x":i2,
                     "y": i,
                     "id" :id,
                     "key":Math.random() ,
                     "hasRedPiece":pieceState[i2][i] === "r",
                     "hasBlackPiece":pieceState[i2][i] === "b",
                     "isEmpty":true,
                     "targetSquare":targetSquare
                    })

                id++;
            }
        }

        setBoardInfo(squares);
      },[])




    useEffect(() => {
        console.log("Use effect called");
        let squares = [];
        let id = 0;
        for (let i = 0; i < refBoardInfo.current.length; i++) {
                squares.push(<BoardSquare x={refBoardInfo.current[i].x} y={refBoardInfo.current[i].y} id ={refBoardInfo.current[i].id} key={Math.random()} hasRedPiece={refBoardInfo.current[i].hasRedPiece} hasBlackPiece={refBoardInfo.current[i].hasBlackPiece} isEmpty={refBoardInfo.current[i].isEmpty} targetSquare={refBoardInfo.current[i].targetSquare} />)
                id++;
        }
        console.log("squares", squares);
        setBoardElements(squares);
 
    }, [boardInfo]); //renders on start but looks for pieceState to be changed and then triggers useEffect


    // const boardColour = redPiece ? 'red' : blackPiece ? 'blue' : '#F7E47E';
    const boardColour = '#F7E47E';



        return (
            <BoardStyle boardColour={boardColour}>
                {boardElements}
            </BoardStyle>
        )


}

export default GameBoard;