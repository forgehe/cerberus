// @ts-check

import { Client } from "boardgame.io/react";
import { Cerberus } from "./Game.tsx";
import { CerberusField } from "./Board.tsx";
import { Local } from "boardgame.io/multiplayer";
import "normalize.css";

const CerberusClient = Client({
  game: Cerberus,
  board: CerberusField,
  // multiplayer: Local(),
});

const App = () => (
  <div>
    <CerberusClient playerID="0" />
    {/* <CerberusClient playerID="1" />
    <CerberusClient playerID="2" />
    <CerberusClient playerID="3" /> */}
  </div>
);

export default App;
