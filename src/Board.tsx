// @ts-check

import React from "react";
import { playerArea } from "./board/playerArea.tsx";
import { mainboardArea } from "./board/mainboardArea.tsx";
import { opponentArea } from "./board/opponentArea.tsx";

export function CerberusField({ ctx, G, moves }) {
  const onClick = (id) => moves.clickCell(id);

  const cellStyle = {
    border: "1px solid #555",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    // textAlign: "center",
  };

  return (
    <div>
      {/*
      {opponentArea}
      */}
      {opponentArea(ctx)}
      {mainboardArea}
      {playerArea}
    </div>
  );
}
