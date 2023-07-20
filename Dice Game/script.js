'use strict';

// selecting the elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new'); 
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold = document.querySelector('.btn--hold'); 
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// starting
let holdScore,playing,activePlayer,currentScore;

const init = function() {
  holdScore = [0,0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

diceEl.classList.add('hidden');
//switching the player
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// rolling the dice
btnRoll.addEventListener('click',function() {
  if(playing){
  let score = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${score}.png`;

  if(score !== 1) {
    currentScore = currentScore+score;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
  else {
    switchPlayer();
  }
}})

// holding the score
btnHold.addEventListener('click',function() {
  if(playing) {
    holdScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = holdScore[activePlayer];
    if(holdScore[activePlayer] >= 40) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
      switchPlayer();
    }
  }
})

//new game 
btnNew.addEventListener('click',function(){
  init();
})