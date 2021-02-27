console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Samuel',
    hand: []
  },
  {
    name: 'Alden',
    hand: []
  },
  {
    name: 'Sarah',
    hand: []
  },
  {
    name: 'Ellen',
    hand: []
  }
];

var deck = [];

for (var z = 0; z < 4; z++) {
  for (var y = 1; y < 14; y++) {
    var card = {
      rank: null,
      suit: null
    };
    if (z === 0) {
      card.suit = 'clubs';
    } else if (z === 1) {
      card.suit = 'spades';
    } else if (z === 2) {
      card.suit = 'hearts';
    } else {
      card.suit = 'diamonds';
    }
    if (y === 1) {
      card.rank = 'Ace';
    } else if (y === 11) {
      card.rank = 'Jack';
    } else if (y === 12) {
      card.rank = 'Queen';
    } else if (y === 13) {
      card.rank = 'King';
    } else {
      card.rank = y;
    }
    deck.push(card);
  }
}

var shuffledDeck = _.shuffle(deck);

function dealCards(shuffledDeck) {
  var dealedCards = [];
  var dealedCardsIndex = 0;
  for (var i = 0; i < players.length * 2; i++) {
    dealedCards.push(shuffledDeck[i]);
  }
  for (var j in players) {
    for (var k = 0; k < 2; k++) {
      players[j].hand.push(dealedCards[dealedCardsIndex]);
      dealedCardsIndex++;
    }
  }
}

dealCards(shuffledDeck);

function findWinner(players) {
  var winner = null;
  var winningHand = 0;
  for (var x = 0; x < players.length; x++) {
    var handValue = 0;
    for (var l = 0; l < players[x].hand.length; l++) {
      if (typeof players[x].hand[l].rank === 'number') {
        handValue += players[x].hand[l].rank;
      } else if (players[x].hand[l].rank === 'Ace') {
        handValue += 11;
      } else {
        handValue += 10;
      }
    }
    if (handValue > winningHand) {
      winningHand = handValue;
      winner = players[x].name;
    }
  }
  console.log('The winner is', winner);
}

findWinner(players);
