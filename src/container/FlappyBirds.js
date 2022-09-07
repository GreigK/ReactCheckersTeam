import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Bird = styled.div`
position: absolute;
background-color: #8F3152;
height: ${(props) => props.size}px;
width: ${(props) => props.size}px;
top: ${(props) => props.top}px;
border-radius: 50%;`

const PageStyle = styled.div`
display: flex;
width: 100%;
justify-content: center;
& span{
  color: white;
  font-size: 24px;
  position: absolute;
}`

const GameBox = styled.div`
height: ${(props) => props.height}px;
width: ${(props) => props.width}px;
background-color: #AE6C6B;
overflow: hidden;`

const Obstacle = styled.div`
position: relative;
top: ${(props) => props.top}px;
height: ${(props) => props.height}px;
width: ${(props) => props.width}px;
left: ${(props) => props.left}px;
background-color: #318F6E;`

const bird_size = 20;
const game_width = 500;
const game_height = 500;
const gravity = 4;
const heightOfJump = 100;
const obstacle_width = 40;
const obstacle_gap = 200;

function FlappyBirds() {

  const [positionOfBird, setPositionOfBird] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(100);
  const [obstacleLeft, setObstacleLeft] = useState(game_width - obstacle_width);
  const [score, setScore] = useState(0);

  const bottomObstacleHeight = game_height - obstacle_gap - obstacleHeight;

  useEffect(() => {
    let timeId;
    if (gameHasStarted && positionOfBird < game_height - bird_size) {
      timeId = setInterval(() => {
        setPositionOfBird(positionOfBird => positionOfBird + gravity);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    }
  }, [positionOfBird, gameHasStarted, score]);

  useEffect(() => {
    let obstacleId;
    if (gameHasStarted && obstacleLeft >= -obstacle_width) {
      obstacleId = setInterval(() => {
        setObstacleLeft((obstacleLeft) => obstacleLeft - 3);
      }, 24);

      return () => {
        clearInterval(obstacleId)
      };
    }
    else {
      setObstacleLeft(game_width - obstacle_width);
      setObstacleHeight(Math.floor(Math.random() * (game_height - obstacle_gap)))
      setScore(score => (score + 1))
    }
  }, [gameHasStarted, obstacleLeft]);



  useEffect(() => {
    const hasCollidedWithTopObstacle = positionOfBird >= 0 && positionOfBird < obstacleHeight;
    const hasCollidedWithBottomObstacle = positionOfBird <= 500 && positionOfBird >= 500 - bottomObstacleHeight;

    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= obstacle_width &&
      (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
    ) {
      setGameHasStarted(false)
    }
  }, [positionOfBird, obstacleHeight, bottomObstacleHeight, obstacleLeft]);


  const handleClick = () => {
    const newPositionOfBird = positionOfBird - heightOfJump;
    if (!gameHasStarted) {
      setGameHasStarted(true);
    } else if (newPositionOfBird < 60) {
      setPositionOfBird(60)
    } else {
      setPositionOfBird(newPositionOfBird);
    }
  };

  return (
    <div>
    <PageStyle onClick={handleClick}>
      <GameBox height={game_height} width={game_width}>
        <Obstacle
          top={0}
          width={obstacle_width}
          height={obstacleHeight}
          left={obstacleLeft}
        />
        <Bird size={bird_size} top={positionOfBird} />
        <Obstacle
          top={game_height - (obstacleHeight + bottomObstacleHeight)}
          width={obstacle_width}
          height={bottomObstacleHeight}
          left={obstacleLeft}
        />
      </GameBox>
      <span>{score}</span>
    </PageStyle>
    </div>
  );
}

export default FlappyBirds;