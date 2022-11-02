// @ts-check

import { INVALID_MOVE } from "boardgame.io/core";
import { card } from "./Cards.tsx";
import { shuffle } from "./Functions.tsx";

const generateStandardDeck = () => {
  const Deck = [];
  Deck.push(card.kick0);
  Deck.push(card.kick1);
  Deck.push(card.kick2);
  return Deck;
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

function setupPlayers(numPlayers) {
  const player = [];
  for (let i = 0; i < numPlayers; i++) {
    const playerInfo = {
      deck: startingDeck(),
      hand: [],
      discard: [],
      heroAtk: null,
      heroDef: null,
    };
    playerInfo.hand = playerInfo.hand.concat(
      playerInfo.deck.slice(
        playerInfo.deck.length - 6,
        playerInfo.deck.length - 1
      )
    );
    playerInfo.deck = playerInfo.deck.slice(0, playerInfo.deck.length - 5);
    player.push(playerInfo);
  }
  return player;
}

const INITIAL_BOARD = {
  kickDeck: new Array(10).fill(card.kick),
  standardDeck: generateStandardDeck(),
  weaknessDeck: new Array(20).fill(card.weakness),
};

export const Cerberus = {
  setup: (ctx, setupData) => ({
    ...INITIAL_BOARD,
    player: setupPlayers(ctx.numPlayers || 2),
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
