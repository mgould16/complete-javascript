/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, gamePlaying;

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}


init();

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
};

// Hide a display
document.querySelector('.dice').style.display = 'none';
// roll dice and put score to active player
// document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector(".btn-roll").addEventListener('click', function() {
  if (gamePlaying) {
    var array = [];
    var dice = Math.floor((Math.random() * 6) + 1)
    array.push(dice);
    var lastArray = array[array.length - 1];
    // display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = "block";
    diceDOM.src = 'dice-' + dice + '.png';
    if (dice != 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if (dice == 6 && lastArray == 6){
      //  logic will reset player score if 2 sixes are rolled in a row
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else {
      nextPlayer();
    };
  }
  // generate random number
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
    // Add score to global score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    // allow users to enter in a winning score
    var input = document.querySelector(".final-score").value;
    var winnningscore;
    if (input) {
      winnningscore = input;
    } else {
      winnningscore = 100;
    };

    // Check if player won the game
    if (scores[activePlayer] >= winnningscore){
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);



// insert html
// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' dice '</em>';

//  if a player rolls 2 6's in a row, he loses his entire score and it is the next person's go
// I must save the previous dice roll score.
