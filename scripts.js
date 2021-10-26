let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

let gameActive = true;
//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let indicator = document.querySelector('#next-lbl');
indicator.innerText = nextPlayer;



//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    /*let editingTools = document.createElement("button");
    editingTools.innerText="[]";
    //`<button id = 'clicker'>[]</button>`;
*/
    let cells = document.querySelectorAll("td");

   for(let i=0;i<cells.length;i++){
        let editingTools = document.createElement("button");
        editingTools.innerText="[]";
        cells[i].appendChild(editingTools);
    }
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
        clickedBtn.disabled = true;
        

    if(nextPlayer == 'X'){
        nextPlayer = '0';
        indicator.innerText = nextPlayer;
    }
    else if(nextPlayer == '0'){
    nextPlayer = 'X';
    indicator.innerText = nextPlayer;
    }

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let gg = document.querySelector('#game-over-lbl');
        gg.innerHTML = '<h1> Game Over </h1>';
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let counter = 0;
    let btns = document.querySelectorAll('button');
    for (let i=0; i <btns.length;i++){
        if (btns[i].disabled == true){
           counter = counter +1; 
        }
    }
    if (counter == 9)
    return true;
    else
    return false;
        // This function returns true if all the buttons are disabled and false otherwise 
   
}
