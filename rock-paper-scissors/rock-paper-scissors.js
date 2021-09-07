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
    // player picks rock
    if (playerSelect.toLowerCase() == 'rock') {
        if (computerSelection == 'rock') {
            console.log('It\'s a tie!')
            return 3
        }
        else if (computerSelection == 'paper') {
            console.log('You lose! Paper beats rock.')
            return 2
        }

        else {
            console.log('You win! Rock beats scissors.')
            return 1
        }
    }

    // player picks paper
    else if (playerSelect.toLowerCase() == 'paper'){
        if (computerSelection == 'rock') {
            console.log('You win! Paper beats rock.')
            return 1
            
        }
        else if (computerSelection == 'paper') {
            console.log('It\'s a tie!')
            return 3
        }

        else {
            console.log('You lose! Scissors beats paper.')
            return 2
        }
    }

    // player picks scissor
    else if (playerSelect.toLowerCase() == 'scissors'){
        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats scissors.')
            return 2
        }
        else if (computerSelection == 'paper') {
            console.log('You win! Scissors beats paper.')
            return 1
        }

        else {
            console.log('It\'s a tie!')
            return 3
        }
        
    }

    
    else {
        result = 'Invalid Selection';
    }   

};

// function game() {
//     let compScore = 0;
//     let userScore = 0;
//     let result;
//     for (let i = 0; i < 5; i++) {
//         result = playRound(prompt('Rock, paper, or scissors?'), computerPlay());
//         if (result == 2) {
//             compScore++;
//         }

//         else if (result == 1) {
//             userScore++;
//         }
//     }

//     if (compScore > userScore) {
//         console.log(`You lost. The computer scored ${compScore}. You scored ${userScore}.`)
//     }

//     else if (compScore < userScore) {
//         console.log(`You won! The computer scored ${compScore}. You scored ${userScore}.`)
//     }

//     else {
//         console.log(`It's a tie! The computer scored ${compScore}. You scored ${userScore}.`)
//     }
// }

// game();

    let compScore = 0;
    let userScore = 0;

function roundPlayed() {
    let result = playRound(this.innerText.toLowerCase(),computerPlay()); // `this` references the button clicked by user
    
    if (result == 2) {
        compScore++;
        document.querySelector('#computer-score').innerText = compScore;
    }

    if (result == 1) {
        userScore++;
        document.querySelector('#player-score').innerText = userScore;
    }

    if (compScore == 5 || userScore == 5) {
        let scoreCont = document.getElementsByClassName('scores')[0];
        const div = document.createElement('div');
        const p = document.createElement('span');

        p.innerText = compScore > userScore ? 'Computer wins!':'Player wins!'
        div.append(p);
        scoreCont.append(div);
    }


}

const choices = Array.from(document.querySelectorAll('.choice'));
choices.forEach(choice => 
    choice.addEventListener('click', roundPlayed));

    // create roundPlayed function
    // 

