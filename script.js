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
    oneSquare.addEventListener("click", function(e) {
        if (oneSquare.style.background == "red" || oneSquare.style.background == "blue"){
            oneSquare.style.background = oneSquare.style.background;
            turnCount--;
        } else {
        oneSquare.style.background = squareColor;
        }
        
        // variables for shortened reference to square background colors
        const s1 = (document.getElementById("1").style.background);
        const s2 = (document.getElementById("2").style.background);
        const s3 = (document.getElementById("3").style.background);
        const s4 = (document.getElementById("4").style.background);
        const s5 = (document.getElementById("5").style.background);
        const s6 = (document.getElementById("6").style.background);
        const s7 = (document.getElementById("7").style.background);
        const s8 = (document.getElementById("8").style.background);
        const s9 = (document.getElementById("9").style.background);

        // variable for shortened reference to "game ending" HTML
        const gameResults = document.querySelector(".gameResults");
       
        // setting winningPlayer value to player who just finished turn.
        let winningPlayer;
        if (turnCount % 2 == 0) {
           winningPlayer = " 1 (RED)";
        } else {winningPlayer = " 2 (BLUE)";}
       
        //if statements for winning conditions (or tie)
        if (s1 == s2 && s1 == s3 && s1 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s4 == s5 && s4 == s6 && s4 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s7 == s8 && s7 == s9 && s7 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s1 == s4 && s1 == s7 && s1 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s2 == s5 && s2 == s8 && s2 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s3 == s6 && s3 == s9 && s3 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s1 == s5 && s1 == s9 && s1 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s3 == s5 && s3 == s7 && s3 !== "") {
            gameResults.innerHTML = `Player${winningPlayer} is the winner!`;
            endGame();
        } else if (s1 !== "" && s2 !== "" && s3 !== "" && s4 !== "" && s5 !== "" && s6 !== "" && s7 !== "" && s8 !== "" && s9 !== ""){
            gameResults.innerHTML = `The game is a TIE!!`;
            endGame();
        }
    })
}

// end game function to prevent further play once game is complete
function endGame() {
    const grabber = document.querySelector(".gameBoard");
    grabber.style.pointerEvents = "none";
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
    document.querySelector(".gameResults").innerHTML = "";
    const grabber = document.querySelector(".gameBoard");
    grabber.style.pointerEvents = "auto";
    turnCount = 0;
    squareColor = "red";
    for (let i=0; i<gridSize; i++) {
        document.getElementById(`${i+1}`).style.background = "";
    }
})