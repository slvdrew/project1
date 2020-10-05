// global increment variables
    var ties = 0;
    var wins = 0;
    var losses = 0;
// When your HTML loads, it should prompt the user for how many rounds they want to play. You will save this number to a variable.
    var number = prompt("Please enter the amount of rounds you would like to play", "1 to 9");
    var rounds = parseInt(number);

    while(rounds < 1 || rounds > 9) {
        var number = prompt("Invalid Input. Please enter the amount of rounds you would like to play", "1 to 9");
        var rounds = parseInt(number);
    }

// After the user enters the number of rounds they want to play, use the variable where you stored the user input to loop through the number of rounds. For every round you should do the following: Prompt the user for r, p, or s (rock, paper, or scissors). Write code for the computer to randomly generate a number 0-2 (this will represent the computer choice of rock paper scissors).
    for(var i = 0; i<rounds; i++) {
        var userInput = prompt("r, p, s (Rock, Paper, Scissors)");
        var computerInput = Math.floor(Math.random() * 3);
        if(computerInput == 0 ) {
            if(userInput == 'r') {
                ties++;
                alert("You tied against the Computer!");
            }
            else if(userInput == 'p') {
                wins++;
                alert("You won against the Computer!");
            }

            else{
                losses++;
                alert("You lost against the Computer!");
            }

        }else if(computerInput == 1 ) {
            if(userInput == 'p') {
                ties++;
                alert("You tied against the Computer!");
            }
            else if(userInput == 's') {
                wins++;
                alert("You won against the Computer!");
            }

            else{
                losses++;
                alert("You lost against the Computer!");
            }
        }else if(computerInput == 2 ) {
            if(userInput == 's') {
                ties++;
                alert("You tied against the Computer!");
            }
            else if(userInput == 'r') {
                wins++;
                alert("You won against the Computer!");
            }

            else{
                losses++;
                alert("You lost against the Computer!");
            }
        }
    }

alert("You have won " + wins + " round(s) \n" + "You have tied " + ties + " round(s) \n" + "You have lost " + losses + " round(s) \n");