let playerTurn = "X";
let moves = ["", "", "", "", "", "", "", "", ""];

// GRAB BOXES
const boxes = document.querySelectorAll(".box");

// ADD EVENT LISTENER, FOR EACH LOOP
boxes.forEach((box) => {
  box.addEventListener("click", boxEventListener);
});

// CREATE EVENT LISTENER
function boxEventListener() {
  moves[this.id] = playerTurn;
  winLogic();
  console.log(moves);

  this.innerHTML = playerTurn;

  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

function winLogic() {
  if (moves[0] === moves[1] && moves[1] === moves[2] && moves[0] !== "") {
    console.log(`${playerTurn} is the winner on row 1!`);
  } else if (
    moves[3] === moves[4] &&
    moves[4] === moves[5] &&
    moves[3] !== ""
  ) {
    console.log(`${playerTurn} is the winner on row 2!`);
  } else if (
    moves[6] === moves[7] &&
    moves[7] === moves[8] &&
    moves[6] !== ""
  ) {
    console.log(`${playerTurn} is the winner on row 3!`);
  } else if (
    moves[0] === moves[3] &&
    moves[3] === moves[6] &&
    moves[0] !== ""
  ) {
    console.log(`${playerTurn} is the winner in column 1!`);
  } else if (
    moves[1] === moves[4] &&
    moves[4] === moves[7] &&
    moves[1] !== ""
  ) {
    console.log(`${playerTurn} is the winner in column 2!`);
  } else if (
    moves[2] === moves[5] &&
    moves[5] === moves[8] &&
    moves[2] !== ""
  ) {
    console.log(`${playerTurn} is the winner in column 3!`);
  } else if (
    moves[0] === moves[4] &&
    moves[4] === moves[8] &&
    moves[0] !== ""
  ) {
    console.log(`${playerTurn} is the winner on a diagonal`);
  } else if (
    moves[2] === moves[4] &&
    moves[4] === moves[6] &&
    moves[2] !== ""
  ) {
    console.log(`${playerTurn} is the winner on a diagonal`);
  } else {
    console.log("No winner");
  }
}
