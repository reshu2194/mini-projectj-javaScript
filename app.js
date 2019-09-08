var scores,activePlayer,roundScore,gamePlaying;

 init ();

 document.querySelector('.btn-new').addEventListener('click',init);

function  init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){
   //1.random number
   var dice = Math.floor(Math.random() * 6) + 1;

   //display the result
   var dicDom = document.querySelector('.dice');
   dicDom.style.display = 'block';
   dicDom.src = 'dice-' + dice + '.png';
    //3.update the round score
    if(dice !==1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //nxt player
        nextPlayer();
    }
}

});

function nextPlayer(){

    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display ='none';

}

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer ).textContent = scores[activePlayer];
//check if player won the game
    if(scores[activePlayer] >= 20){
        
        document.querySelector('#name-' + activePlayer).textContent = "winner";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else {
        // next player
        nextPlayer();
    }
  }



});

