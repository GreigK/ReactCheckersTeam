import {Chessboard, chessboard} from 'react-chessboard'
import './App.css';
import GameBoard from './container/GameBoard'
import FlappyBirds from './container/FlappyBirds';

function App() {
  return (
    <div className="App">
      router
      <GameBoard/>
      <Chessboard id="BasicBoard"/>
      <FlappyBirds/>
    </div>
  );
}

export default App;
