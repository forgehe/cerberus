// @ts-check

import { Client } from 'boardgame.io/react';
import { Cerberus } from './Game.tsx';
// import { CerberusField } from './Board';

const App = Client({
  game: Cerberus,
  board: CerberusField,
});

export default App;