const displayResult = document.querySelector('#display-result');
const displaySelection = document.querySelector('#selections-display');
const displayScore = document.querySelector('#display-score');
const resetBtn = document.querySelector('#reset-button');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
}

    displayScore.innerHTML = `Wins: ${score.wins}, 
losses:${score.losses}, Ties:${score.ties}`;

document.querySelector('#rock-btn')
  .addEventListener('click', () => {
    playGame('rock')
})

document.querySelector('#paper-btn')
  .addEventListener('click', () => {
    playGame('paper')
})

document.querySelector('#scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
})

resetBtn.addEventListener('click', () => {

  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  }

  localStorage.removeItem('score');
  displayScore.innerHTML = `Wins: ${score.wins}, 
losses:${score.losses}, Ties:${score.ties}`;

})


function playGame(playerMove) {

  const computerPick = computerMove();

   let result = '';

  if(playerMove === 'rock') {

      if(computerPick === 'scissors') {
        result = 'You Win!'
      }else if (computerPick === 'paper') {
        result = 'You Lose!';
      } else if (computerPick === 'rock') {
        result = 'Tie.';
      }

  } else if (playerMove === 'paper') {

    if(computerPick === 'scissors') {
      result = 'You Lose!';
    }else if (computerPick === 'paper') {
      result = 'Tie.';
    } else if (computerPick === 'rock') {
      result = 'You Win!'
    }

  } else if (playerMove === 'scissors') {

    if(computerPick === 'scissors') {
      result = 'Tie.';
    }else if (computerPick === 'paper') {
      result = 'You Win!'
    } else if (computerPick === 'rock') {
      result = 'You Lose!';
    }

  } 

  displayResult.textContent = result;
  displaySelection.innerHTML = `
    You <img class="images-dev" src="Images/${playerMove}-emoji.png">
<img class="images-dev" src="Images/${computerPick}-emoji.png"> computer`;

  updateScore(result);

}

function computerMove() {

  let computerPick = '';
  
  const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
      computerPick = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerPick = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerPick = 'scissors';
    }

    return computerPick;

}

function updateScore(result) {

  if(result === 'You Win!') {
    score.wins++;
  } else if(result === 'You Lose!') {
    score.losses++;
  } else if(result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  displayScore.innerHTML = `Wins: ${score.wins}, 
losses:${score.losses}, Ties:${score.ties}`;

}