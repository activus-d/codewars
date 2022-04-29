function rpsls(pl1,pl2){
    //Your Magnificent Code here
    let playerResult = ''
    //check conditions for player1 winning
    if( (pl1 === 'scissors' && pl2 === 'paper') ||
        (pl1 === 'paper' && pl2 === 'rock') ||
        (pl1 === 'rock' && pl2 === 'lizard') ||
        (pl1 === 'lizard' && pl2 === 'spock') ||
        (pl1 === 'spock' && pl2 === 'scissors') ||
        (pl1 === 'scissors' && pl2 === 'lizard') ||
        (pl1 === 'lizard' && pl2 === 'paper') ||
        (pl1 === 'paper' && pl2 === 'spock') ||
        (pl1 === 'spock' && pl2 === 'rock') ||
        (pl1 === 'rock' && pl2 === 'scissors')
        ) {playerResult = 'Player 1 Won!';
          return playerResult
    }
    //check conditions for player two winning
    else if ( (pl2 === 'scissors' && pl1 === 'paper') ||
        (pl2 === 'paper' && pl1 === 'rock') ||
        (pl2 === 'rock' && pl1 === 'lizard') ||
        (pl2 === 'lizard' && pl1 === 'spock') ||
        (pl2 === 'spock' && pl1 === 'scissors') ||
        (pl2 === 'scissors' && pl1 === 'lizard') ||
        (pl2 === 'lizard' && pl1 === 'paper') ||
        (pl2 === 'paper' && pl1 === 'spock') ||
        (pl2 === 'spock' && pl1 === 'rock') ||
        (pl2 === 'rock' && pl1 === 'scissors') ) {
            playerResult = 'Player 2 Won!';
            return playerResult
        }
    //result is draw if none of the condtions above is true
    playerResult = 'Draw!';
    return playerResult
}