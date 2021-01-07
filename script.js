console.log("script file is linked");

// set initial game values
const gameBoard = document.querySelector(".gameBoard");
const gridSize = 9;
document.getElementById("playerTurn").innerHTML = "Player 1 (RED)";
let squareColor = "red"
let turnCount = 0;

// creates divs for each grid square and assigns unique id to each
for (let i=0; i<gridSize; i++) {
    let box = document.createElement("div");
    box.classList.add("square");
    box.setAttribute("id", `${i+1}`)
    gameBoard.appendChild(box);
}

// adds event listener to each grid square
// determines if square color should change or remain the same
for (let i=0; i<gridSize; i++) {
    const oneSquare = document.getElementById(`${i+1}`);
    console.log(oneSquare);
    oneSquare.addEventListener("click", function(e) {
        if (oneSquare.style.background == "red" || oneSquare.style.background == "blue"){
            oneSquare.style.background = oneSquare.style.background;
            turnCount--;
        } else {
        oneSquare.style.background = squareColor;
        }
    })
}

// adds event listener to game board to determine which player is taking turn
gameBoard.addEventListener("click", function(e) {
    turnCount++;
    console.log(turnCount);
    if (turnCount % 2 == 0) {
        squareColor = "red";
        document.getElementById("playerTurn").innerHTML = "Player 1 (RED)";
    } else {
        squareColor = "blue"
        document.getElementById("playerTurn").innerHTML = "Player 2 (BLUE)";
    };
})

// reset all game values to start
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", function(e) {
    document.getElementById("playerTurn").innerHTML = "Player 1 (RED)";
    turnCount = 0;
    squareColor = "red";
    for (let i=0; i<gridSize; i++) {
        document.getElementById(`${i+1}`).style.background = "gray";
    }
})



