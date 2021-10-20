let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

let gameActive = true;
//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    let editingTools = 
    `<button id = 'clicker'>[]</button>`;

    let cells = document.querySelectorAll("tr");

    for(let i=0;i<cells.length;i++){
        cells[i].innerHTML = editingTools;
    }
    /*let btn1 = document.createElement("button");
    btn1.innerHTML="[]";
    let c1 = document.getElementsById("c1");
    c1.appendChild("btn1");
    
    let btn2 = document.createElement("button");
    btn2.innerHTML="[]";
    let c2 = document.getElementsById("c2");
    c2.appendChild("btn2");

    let btn3 = document.createElement("button");
    btn3.innerHTML="[]";
    let c3 = document.getElementsById("c3");
    c3.appendChild("btn3");

    let btn4 = document.createElement("button");
    btn4.innerHTML="[]";
    let c4 = document.getElementsById("c4");
    c4.appendChild("btn4");

    let btn5 = document.createElement("button");
    btn5.innerHTML="[]";
    let c5 = document.getElementsById("c5");
    c5.appendChild("btn5");

    let btn6 = document.createElement("button");
    btn6.innerHTML="[]";
    let c6 = document.getElementsById("c6");
    c6.appendChild("btn6");
   
    let btn7 = document.createElement("button");
    btn7.innerHTML="[]";
    let c7 = document.getElementsById("c7");
    c7.appendChild("btn7");

    let btn8 = document.createElement("button");
    btn8.innerHTML="[]";
    let c8 = document.getElementsById("c8");
    c8.appendChild("btn8");*/
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board

let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let clickedBtn = event.target;

    clickedBtn.innerText = nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
