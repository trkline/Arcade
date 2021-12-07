
const cellStatus = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cells = document.querySelector('.cell');
//console.log(cellStatus) do this to make sure its correct

//define x and o and give them value as const.. we do not want these to change
const x = 'x';
const o = 'o'
//define game is in action and xIsplaying as let (we want these to be able to change unlike const) xIsUp can be a boolean so we dont have to define o
let gameInAction = true;
let xIsUp = true;

const handleReset = (e) => {
  // console.log(e);
}

const cellClick = (e) => {
  // console.log(e)
}

function displayWinner(){
  var x = document.createElement(h1);
  var y = document.createTextNode ("Winner!!")
  x.appendChild(y);
  document.body.appendChild(x);

 } 

 //functions 

 const letterToSymbol = (letter) => letter === 'x' ? x : o;
//we must create a function to control what happens if the game is over
 const ifWin = (letter) => {
   gameInAction = false;
   if(letter === 'x'){
     statusDiv.innerHTML = `${letterToSymbol(letter)} is the winner!!!`
   } else { statusDiv.innerHTML = `${letterToSymbol(letter)} is the winner!!!` }
 };
//now we have to give each cell a delcaration with whatever was in my html i.e. first=0th
 const checkGameInProgress = () => {
   const first = cells[0].classList[1];
   const second = cells[1].classList[1];
   const third = cells[2].classList[1];
   const fourth = cells[3].classList[1];
   const fifth = cells[4].classList[1];
   const sixth = cells[5].classList[1];
   const seventh = cells[6].classList[1];
   const eighth = cells[7].classList[1];
   const ninth = cells[8].classList[1];
 

//now we must write a function where we check to see if there is awinner
//use previous ifWin function to delcare the winner if there is one
//remember first plot out the different possibilities of winning
//how many possibilities are there to win? 
/*
X X X
X X X
X X X
*/ 
//down on left, down middle, down right, across top, across middle, across bottom, diagonol top left, 
// diagonal top right; this means there are 8 possible wins 
//this means you must have 10 functions- 8 for the win, 1 for tie, and one to continue the game

  if (first && first === second && first === third){
    ifWin(displayWinner);
  } else if (first && first === fourth && first === seventh){
    ifWin(displayWinner);
  } else if (first && first === fifth && first === ninth){
    ifWin(displayWinner);
  } else if (second && second === fifth && second === eighth){
    ifWin(displayWinner);
  } else if (third && third === sixth && third === ninth){
    ifWin(displayWinner);
  } else if (fourth && fourth === fifth && fourth === sixth){
    ifWin(displayWinner);
  } else if (seventh && seventh === eighth && seventh === ninth){
    ifWin(displayWinner);
  } else if (third && third === fifth && third === eighth){
    ifWin(displayWinner);
  } else if (first && second && third && fourth && fifth && sixth && seventh && eighth && ninth){
    ifWin = false; 
    statusDiv.innerHTML = 'Users Tied :( Do better next time!'
  } else {
    xIsUp = !xIsUp
    if (xIsUp) {
    //figure this out
    } else {
      statusDiv.innerHTML= `${x} is next!`;
    }
  }
}

//create a function that allows the letter who is up, to click the cell and input their letter. 
const whenCellClicked = () => {

  return ;
//make if else statement checking game status if next person is up

if (xIsUp) {
 
} 

if (!xIsUp){

}

//after finished with checking game you have to define something to allow you to click the cell and
//store a the given value of the players current turn (event handler)

// after finsihed checking game you have to program the reset button to allow you to restart (event handler)

const restart =() => {
  //give xIsUp value of true in order to restart the game..

  //next you have to allow the computer to make reset consts back to normal (look up innheHTML again)
  
}



