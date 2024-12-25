const displayResult = document.querySelector('#display-result');
const displaySelection = document.querySelector('#selections-display');

let result;

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


function playGame(playerMove) {

  const computerPick = computerMove();

   result = '';

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