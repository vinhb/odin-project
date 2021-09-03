function computerPlay() {
    let randNum = Math.floor(Math.random() * 3 + 1)
    let computerChoice;
    if (randNum == 1) {
        let computerChoice = 'rock';
        return computerChoice
    }
    else if (randNum == 2) {
        let computerChoice = 'paper';
        return computerChoice
    }
    else {
        let computerChoice = 'scissors';
        return computerChoice
    }
    
};

function playRound(playerSelect, computerSelection) {
    let result;
    // player picks rock
    if (playerSelect.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            return
        }
        else if (computerSelection == 'paper') {
            return 2
        }

        else {
            return 1
        }
    }

    // player picks paper
    else if (playerSelect.toLowerCase() == 'paper'){
        if (computerSelection == 'rock') {
            return 1
            
        }
        else if (computerSelection == 'paper') {
            return
        }

        else {
            return 2
        }
    }

    // player picks scissor
    else if (playerSelect.toLowerCase() == 'scissors'){
        if (computerSelection == 'rock') {
            return 2
        }
        else if (computerSelection == 'paper') {
            return 1
        }

        else {
            return
        }
        
    }

    
    else {
        result = 'Invalid Selection';
    }
    console.log(result);
    

};

function game() {
    let compScore = 0;
    let userScore = 0;
    
    playRound(prompt('Rock, paper, or scissors?'), computerPlay());
    playRound(prompt('Rock, paper, or scissors?'), computerPlay());
    playRound(prompt('Rock, paper, or scissors?'), computerPlay());
    playRound(prompt('Rock, paper, or scissors?'), computerPlay());
    playRound(prompt('Rock, paper, or scissors?'), computerPlay());
}