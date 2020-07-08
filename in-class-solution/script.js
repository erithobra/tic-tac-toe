let playerTurn = "X";
let moves = ["", "", "", "", "", "", "", "", ""];
let counter = 0;

// GRAB BOXES
const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
const messageDiv = document.querySelector(".message-div");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  moves = ["", "", "", "", "", "", "", "", ""];
  playerTurn = "X";
  counter = 0;

  boxes.forEach((box) => {
    box.innerHTML = "";
    box.removeEventListener("click", boxEventListener);
    box.addEventListener("click", boxEventListener, { once: true });
  });
}

// ADD EVENT LISTENER, FOR EACH LOOP
boxes.forEach((box) => {
  box.addEventListener("click", boxEventListener, { once: true });
});

function removeEvents() {
  boxes.forEach((box) => {
    box.removeEventListener("click", boxEventListener);
  });
}

// CREATE EVENT LISTENER
function boxEventListener() {
  moves[this.id] = playerTurn;
  counter++;
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
    messageDiv.innerHTML = `${playerTurn} is the winner on row 1!`;
    removeEvents();
  } else if (
    moves[3] === moves[4] &&
    moves[4] === moves[5] &&
    moves[3] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner on row 2!`;
    removeEvents();
  } else if (
    moves[6] === moves[7] &&
    moves[7] === moves[8] &&
    moves[6] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner on row 3!`;
    removeEvents();
  } else if (
    moves[0] === moves[3] &&
    moves[3] === moves[6] &&
    moves[0] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner in column 1!`;
    removeEvents();
  } else if (
    moves[1] === moves[4] &&
    moves[4] === moves[7] &&
    moves[1] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner in column 2!`;
    removeEvents();
  } else if (
    moves[2] === moves[5] &&
    moves[5] === moves[8] &&
    moves[2] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner in column 3!`;
    removeEvents();
  } else if (
    moves[0] === moves[4] &&
    moves[4] === moves[8] &&
    moves[0] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner on a diagonal`;
    removeEvents();
  } else if (
    moves[2] === moves[4] &&
    moves[4] === moves[6] &&
    moves[2] !== ""
  ) {
    messageDiv.innerHTML = `${playerTurn} is the winner on a diagonal`;
    removeEvents();
  } else if (counter === 9) {
    messageDiv.innerHTML = "No winner";
    removeEvents();
  } else {
    messageDiv.innerHTML = "No winner yet";
  }
}
