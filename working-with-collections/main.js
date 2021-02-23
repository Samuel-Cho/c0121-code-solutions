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

var deck = [
  {
    rank: 'Ace',
    suit: 'clubs'
  },
  {
    rank: 2,
    suit: 'clubs'
  },
  {
    rank: 3,
    suit: 'clubs'
  },
  {
    rank: 4,
    suit: 'clubs'
  },
  {
    rank: 5,
    suit: 'clubs'
  },
  {
    rank: 6,
    suit: 'clubs'
  },
  {
    rank: 7,
    suit: 'clubs'
  },
  {
    rank: 8,
    suit: 'clubs'
  },
  {
    rank: 9,
    suit: 'clubs'
  },
  {
    rank: 10,
    suit: 'clubs'
  },
  {
    rank: 'Jack',
    suit: 'clubs'
  },
  {
    rank: 'Queen',
    suit: 'clubs'
  },
  {
    rank: 'King',
    suit: 'clubs'
  },
  {
    rank: 'Ace',
    suit: 'diamonds'
  },
  {
    rank: 2,
    suit: 'diamonds'
  },
  {
    rank: 3,
    suit: 'diamonds'
  },
  {
    rank: 4,
    suit: 'diamonds'
  },
  {
    rank: 5,
    suit: 'diamonds'
  },
  {
    rank: 6,
    suit: 'diamonds'
  },
  {
    rank: 7,
    suit: 'diamonds'
  },
  {
    rank: 8,
    suit: 'diamonds'
  },
  {
    rank: 9,
    suit: 'diamonds'
  },
  {
    rank: 10,
    suit: 'diamonds'
  },
  {
    rank: 'Jack',
    suit: 'diamonds'
  },
  {
    rank: 'Queen',
    suit: 'diamonds'
  },
  {
    rank: 'King',
    suit: 'diamonds'
  },
  {
    rank: 'Ace',
    suit: 'hearts'
  },
  {
    rank: 2,
    suit: 'hearts'
  },
  {
    rank: 3,
    suit: 'hearts'
  },
  {
    rank: 4,
    suit: 'hearts'
  },
  {
    rank: 5,
    suit: 'hearts'
  },
  {
    rank: 6,
    suit: 'hearts'
  },
  {
    rank: 7,
    suit: 'hearts'
  },
  {
    rank: 8,
    suit: 'hearts'
  },
  {
    rank: 9,
    suit: 'hearts'
  },
  {
    rank: 10,
    suit: 'hearts'
  },
  {
    rank: 'Jack',
    suit: 'hearts'
  },
  {
    rank: 'Queen',
    suit: 'hearts'
  },
  {
    rank: 'King',
    suit: 'hearts'
  },
  {
    rank: 'Ace',
    suit: 'spades'
  },
  {
    rank: 2,
    suit: 'spades'
  },
  {
    rank: 3,
    suit: 'spades'
  },
  {
    rank: 4,
    suit: 'spades'
  },
  {
    rank: 5,
    suit: 'spades'
  },
  {
    rank: 6,
    suit: 'spades'
  },
  {
    rank: 7,
    suit: 'spades'
  },
  {
    rank: 8,
    suit: 'spades'
  },
  {
    rank: 9,
    suit: 'spades'
  },
  {
    rank: 10,
    suit: 'spades'
  },
  {
    rank: 'Jack',
    suit: 'spades'
  },
  {
    rank: 'Queen',
    suit: 'spades'
  },
  {
    rank: 'King',
    suit: 'spades'
  }
];

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
