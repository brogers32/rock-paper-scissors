function play() {
    const playerChoice = this.id;
    const computerChoice = computerMove();

    const messageBox = document.querySelector('#text-box');
    const originalMessage = messageBox.textContent;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.classList.contains('player')) button.classList.remove('player');
        if (button.classList.contains('computer')) button.classList.remove('computer');
        if (button.classList.contains('draw')) button.classList.remove('draw');
    });

    if (document.querySelector('#playerScore').textContent === '5' || document.querySelector('#computerScore').textContent === '5') {
        document.querySelector('#playerScore').textContent = '0';
        document.querySelector('#computerScore').textContent = '0';
    }

    let winner;
    let message;

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            winner = 'draw';
            message = `Both players selected ${playerChoice}. It's a draw.`;
        }
        else if (computerChoice === 'paper') {
            winner = 'computer';
            message = 'Paper beats Rock. You Lose.'
        }
        else {
            winner = 'player';
            message = 'Rock beats scissors. You Win.'
        }
    }

    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            winner = 'player';
            message = 'Paper beats rock. You win.';
        }
        else if (computerChoice === 'paper') {
            winner = 'draw';
            message = `Both players selected ${playerChoice}. It's a draw.`;
        }
        else {
            winner = 'computer';
            message = 'Scissors beat paper. You lose.'
        }
    }

    else {
        if (computerChoice === 'rock') {
            winner = 'computer';
            message = 'Rock beats scissors. You lose.'
        }

        else if (computerChoice === 'paper') {
            winner = 'player';
            message = 'Scissors beat paper. You win.'
        }

        else {
            winner = 'draw';
            message = `Both players selected ${playerChoice}. It's a draw.`;
        }
    }

    if (winner !== 'draw') {
        incrementScore(winner);
        this.classList.add('player');
        const comp = document.querySelector(`#${computerChoice}`);
        comp.classList.add('computer');
        setTimeout(() => {
            this.classList.remove('player');
            comp.classList.remove('computer');
        }, 1500);
    }

    else {
        this.classList.add('draw');
        setTimeout(() => this.classList.remove('draw'), 1500);
    }

    if (document.querySelector('#playerScore').textContent === '5') {
        messageBox.textContent = "Congratulations. You've won! Make a selection to play again.";
    }

    else if (document.querySelector('#computerScore').textContent === '5') {
        messageBox.textContent = "You've lost! Make a selection to play again.";
    }

    else {
        messageBox.textContent = message;
        setTimeout(() => messageBox.textContent = originalMessage, 1500);
    }
}

function incrementScore(winner) {
    const winnerScore = document.querySelector(`#${winner}Score`);
    let score = winnerScore.textContent;
    score = (parseInt(score) + 1).toString();
    winnerScore.textContent = score;
}

function computerMove() {
    const num = Math.floor(Math.random() * 3);
    if (num == 0) return 'rock';
    if (num == 1) return 'paper';
    if (num == 2) return 'scissors';
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', play);
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', play);
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', play);