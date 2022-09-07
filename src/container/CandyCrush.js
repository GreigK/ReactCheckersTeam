
import React, { useEffect, useState } from "react"
import ScoreBoard from "../components/Scoreboard"
import blueCandy from './images/bluecandy.jpeg'
import greenCandy from './images/greencandy.jpeg'
import orangeCandy from './images/orangecandy.jpeg'
import purpleCandy from './images/purplecandy.jpeg'
import redCandy from './images/redcandy.jpeg'
import yellowCandy from './images/yellowcandy.jpeg'
import blank from './images/blank.jpeg'

const width = 8
const candyColours = [
  blueCandy,
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy
]

function CandyCrush() {

  const [currentColourArrangement, setCurrentColourArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [scoreDisplay, setScoreDisplay] = useState(0)




  const checkForColumOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      const decidedColour = currentColourArrangement[i]
      const isBlank = currentColourArrangement[i] == blank

      if (columnOfFour.every(square => currentColourArrangement[square] === decidedColour && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        columnOfFour.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedColour = currentColourArrangement[i]
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
      const isBlank = currentColourArrangement[i] == blank

      if (notValid.includes(i)) continue // if these non valid numbers are present conintues with the if statement below

      if (rowOfFour.every(square => currentColourArrangement[square] === decidedColour && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        rowOfFour.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }





  const checkForColumOfThree = () => {
    for (let i = 0; i <= 47; i++) {  //47 because the last set of three squares starts with index 47
      const columnOfThree = [i, i + width, i + width * 2]  //eg [0, 0 + width(8), width(8) * 2 = 16] this is grabbing the three squares each below eachother
      const decidedColour = currentColourArrangement[i]
      const isBlank = currentColourArrangement[i] == blank

      if (columnOfThree.every(square => currentColourArrangement[square] === decidedColour && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        columnOfThree.forEach(square => currentColourArrangement[square] = blank)                      // when three are a match returns an empty string
        return true
      }
    }
  }

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const decidedColour = currentColourArrangement[i]
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
      const isBlank = currentColourArrangement[i] == blank

      if (notValid.includes(i)) continue // if these non valid numbers are present conintues with the if statement below

      if (rowOfThree.every(square => currentColourArrangement[square] === decidedColour && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        rowOfThree.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }




  const moveIntoSquareBelow = () => {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
      const isFirstRow = firstRow.includes(i)

      if (isFirstRow && currentColourArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColours.length)
        currentColourArrangement[i] = candyColours[randomNumber]
      }

      if ((currentColourArrangement[i + width]) === blank) { //if the square below the square we are looping is nothing then get the colour and change it
        currentColourArrangement[i + width] = currentColourArrangement[i]
        currentColourArrangement[i] = blank
      }
    }
  }

  console.log(scoreDisplay);


  const dragStart = (event) => {               // The dragstart event is fired when the user starts dragging an element or text selection
    // console.log(event.target);
    // console.log('drag Start');
    setSquareBeingDragged(event.target)
  }


  const dragDrop = (event) => {
    // console.log(event.target);
    // console.log('drag Drop');
    setSquareBeingReplaced(event.target)
  }


  const dragEnd = (event) => {
    // console.log(event.target);
    // console.log('drag End');

    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

    currentColourArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    currentColourArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

    // console.log('squareBeingDraggedId', squareBeingDraggedId);
    // console.log('squareBeingReplacedId', squareBeingReplacedId);

    const validMoves = [
      squareBeingDraggedId - 1,            // eg is it was 30 to 31 move its valid because 30 + 1 is allowed
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width
    ]

    const validMove = validMoves.includes(squareBeingReplacedId) /// is the bunch of numbers in validMoves include number from squaresBeingReplacedId then its allow


    const isAColumOfFour = checkForColumOfFour()
    const isARowOfFour = checkForRowOfFour()
    const isAColumOfThree = checkForColumOfThree()
    const isARowOfThree = checkForRowOfThree()

    if (squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumOfFour || isAColumOfThree)) {
      setSquareBeingDragged(null)
      setSquareBeingReplaced(null)
    } else {
      currentColourArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src') //if the move isnt valid take the Id from being replaced and use to correct the invalid move
      currentColourArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
      setCurrentColourArrangement([...currentColourArrangement])
    }


  }








  const createBoard = () => {
    const randomColourArrangement = []
    for (let i = 0; i < width * width; i++) {   // basically give random number 
      const randomColour = candyColours[Math.floor(Math.random() * candyColours.length)]  // go to colours and math.floor gives us a only full numbers and a random number based on the length of the array
      randomColourArrangement.push(randomColour)
    }
    setCurrentColourArrangement(randomColourArrangement) // using randomColourArragement to set setCurrent to an array of random colours
  }

  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {                           // schedules new intervel every 100mil inside of the useEffect Hook
    const timer = setInterval(() => {
      checkForColumOfFour()                   //checkForFour above due to it checking for three then stopping. Could be a four also so check that first
      checkForRowOfFour()
      checkForColumOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColourArrangement([...currentColourArrangement])    // spread syntax
    }, 100)
    return () => clearInterval(timer)

  }, [checkForColumOfFour, checkForRowOfFour, checkForColumOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColourArrangement])




  return (
    <div className="fruit">
      <div className="game">
        {currentColourArrangement.map((candyColours, index) => (
          <img
            key={index}
            src={candyColours}
            alt={candyColours}
            data-id={index}
            draggable={true} // All visual elements can be made draggable with this attribute
            onDragStart={dragStart}
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => event.preventDefault()}
            onDragLeave={(event) => event.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        ))}
      </div>
      <ScoreBoard score={scoreDisplay} />
    </div>
  );
}

export default CandyCrush;