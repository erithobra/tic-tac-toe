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
  console.log(moves);

  this.innerHTML = playerTurn;

  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}
