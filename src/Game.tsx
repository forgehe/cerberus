// @ts-check

import { INVALID_MOVE } from 'boardgame.io/core';
import { card } from "./Cards.tsx";

export const Cerberus = {
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: ({ G, playerID }, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = playerID;
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  endIf: ({ G, ctx }) => {
    false
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