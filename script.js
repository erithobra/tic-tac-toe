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
    //console.log(oneSquare);
    oneSquare.addEventListener("click", function(e) {
        if (oneSquare.style.background == "red" || oneSquare.style.background == "blue"){
            oneSquare.style.background = oneSquare.style.background;
            turnCount--;
        } else {
        oneSquare.style.background = squareColor;
        }
        
       const s1 = (document.getElementById("1").style.background);
       const s2 = (document.getElementById("2").style.background);
       const s3 = (document.getElementById("3").style.background);
       const s4 = (document.getElementById("4").style.background);
       const s5 = (document.getElementById("5").style.background);
       const s6 = (document.getElementById("6").style.background);
       const s7 = (document.getElementById("7").style.background);
       const s8 = (document.getElementById("8").style.background);
       const s9 = (document.getElementById("9").style.background);
       

       if (s1 == s2 && s1 == s3 && s1 !== "") {
           console.log("they match");
        } else if (s4 == s5 && s4 == s6 && s4 !== "") {
        console.log("they match2");
        } else if (s7 == s8 && s7 == s9 && s7 !== "") {
        console.log("they match3");
        } else if (s1 == s4 && s1 == s7 && s1 !== "") {
            console.log("they match4");
        } else if (s2 == s5 && s2 == s8 && s2 !== "") {
            console.log("they match5");
        } else if (s3 == s6 && s3 == s9 && s3 !== "") {
            console.log("they match6");
        } else if (s1 == s5 && s1 == s9 && s1 !== "") {
            console.log("they match7");
        } else if (s3 == s5 && s3 == s7 && s3 !== "") {
            console.log("they match8");
        }        


        // for (let j=0; j<gridSize; j++) {
        //     const s1 = document.getElementById("1").style.background;
        //     const s2 = document.getElementById("2").style.background;
        //     const s3 = document.getElementById("3").style.background;
        //     const s4 = document.getElementById("4").style.background;
        //     const s5 = document.getElementById("5").style.background;
        //     const s6 = document.getElementById("6").style.background;
        //     const s7 = document.getElementById("7").style.background;
        //     const s8 = document.getElementById("8").style.background;
        //     const s9 = document.getElementById("9").style.background;
            
        //     if (s1 == s2 && s1 == s3 && s1.value !== "") {
        //         console.log("winner!!");
        //         console.log(s1.value);
        //     } else if (s4 == s5 && s4 == s6 && s4.value !== "") {
        //         console.log("winner222222");
        //     }
        //     console.log(document.getElementById(`${j+1}`).style.background);
        // }
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
        document.getElementById(`${i+1}`).style.background = "";
    }
})


// win conditions


// winArray = [
//     if (document.getElementById("1").style.background == document.getElementById("2").style.background && document.getElementById("1").style.background !== "gray"){}
// ]

// console.log(winArray[0]);

/*

1  2  3
4  5  6
7  8  9

winning combinations:
123
456
789
147
258
369
159
357

*/