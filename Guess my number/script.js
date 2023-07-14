'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore =0;
document.querySelector('.score').textContent = score;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if(!guess) {
    displayMessage('no number');
  }
  else if(guess === secretNumber) {
    displayMessage('correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    
    if(score > highscore) {
      highscore=score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if(guess !== secretNumber) {
    if(score > 0) {
      score--;
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      document.querySelector('.score').textContent = score;
      }
      else {
      displayMessage('you lost');
      }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score=20;

  secretNumber = Math.trunc(Math.random()*20)+1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
})