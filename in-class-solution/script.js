let playerTurn = "X";

// GRAB BOXES
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// ADD EVENT LISTENER, FOR EACH LOOP
boxes.forEach((box) => {
  box.addEventListener("click", boxEventListener);
});

// CREATE EVENT LISTENER
function boxEventListener() {
  console.log(this);

  this.innerHTML = playerTurn;

  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}
