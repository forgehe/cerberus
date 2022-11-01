// @ts-check

import { INVALID_MOVE } from "boardgame.io/core";
import { card } from "./Cards.tsx";

const generateStandardDeck = () => {
  const Deck = [];
  Deck.push(card.kick0);
  Deck.push(card.kick1);
  Deck.push(card.kick2);
  return Deck;
};

const INITIAL_BOARD = {
  kickDeck: new Array(10).fill(card.kick),
  standardDeck: generateStandardDeck(),
};

const startingDeck = () => {
  const Deck = [];
  for (let i = 0; i < 7; i++) {
    Deck.push(card.kick);
  }
  for (let i = 0; i < 3; i++) {
    Deck.push(card.weakness);
  }
  shuffle(Deck);
  console.log(Deck);
  return Deck;
};

// function startingDeck() {
//   return [];
// }

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const Cerberus = {
  setup: (ctx, setupData) => ({
    ...INITIAL_BOARD,
    startingDeck: startingDeck(),
    hand: Array(ctx.numPlayers).fill(0),
  }),

  turn: {
    minMoves: 0,
  },

  endIf: ({ G, ctx }) => {
    return false;
  },
};

// Return true
function IsVictory(cells) {
  return true;
}

// Return false
function IsDraw(cells) {
  return false;
}
