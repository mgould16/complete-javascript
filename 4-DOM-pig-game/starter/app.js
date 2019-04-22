/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore;

scores = [0,0]
activePlayer = 0
roundScore = 0


// Hide a display
document.querySelector('.dice').style.display = 'none';
// roll dice and put score to active player
// document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector(".btn-roll").addEventListener('click', function() {
  // generate random number
  var dice = Math.floor((Math.random() * 6) + 1)
  // display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = "block";
  diceDOM.src = 'dice-' + dice + '.png';
})


// insert html
// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' dice '</em>';


