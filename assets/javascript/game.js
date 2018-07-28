//Set up 4 crystals to click on
//set up score counter - will be between 19-120
//set up random number genaator for numbers between 1-12
// setup click function for the 
// Setup reset function to change the score counter and crystal #s



//Set up variables
var win = 0;
var lose = 0;
var currentScore = 0;
var targetScore = 0; // This is the score they need to match

// assign random numbers to each crystal from 1-12
var blue = (Math.floor(Math.random() * 12) + 1);
var clear = (Math.floor(Math.random() * 12) + 1);
var yellow = (Math.floor(Math.random() * 12) + 1);
var green = (Math.floor(Math.random() * 12) + 1);

// Set up target score from 19-120
targetScore = (Math.floor(Math.random() * 102) + 19);

function reset() {
    //clear current score back to 0
    currentscore = 0;

    //Set up new crystal numbers
    blue = (Math.floor(Math.random() * 12) + 1);
    clear = (Math.floor(Math.random() * 12) + 1);
    yellow = (Math.floor(Math.random() * 12) + 1);
    green = (Math.floor(Math.random() * 12) + 1);

    // Set up new target score
    targetScore = (Math.floor(Math.random() * 102) + 19);
}


//They win if they match targetScore === winScore
//They lose if they go over winScore; 