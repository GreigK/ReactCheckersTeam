// the array potential_start_mines contains all potential coordinates for mines at the beginning of the game.
// this assumes that mines are not placed after the game has started.

potential_start_mines = ["x2y5", "x4y5", "x6y5", "x8y5", "x1y4", "x3y4", "x5y4", "x7y4"]

// the function getRandomInt(max) returns a random integer between 0 and max, 
// so if max is 8, it randomly returns a number between 0 and 7

function getRandomInt(max){
    return Math.floor(Math.random()* max);
};

// the function placeMines() randomly chooses ONE of the coordinates of potential_start_mines. 
// we have to call it multiple times if we want more than one mine. 
function placeMines(){
    return(potential_start_mines[getRandomInt(8)])
}

console.log(placeMines())