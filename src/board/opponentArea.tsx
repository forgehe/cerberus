import React from "react";

const opponentPlaymatStyle = {
  border: "1px solid #555",
  minWidth: "40em",
  minHeight: "8em",
  flexGrow: "1",
};

const opponentAreaStyle = {
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
};

let opponentAreaContent = (ctx) => {
  let output = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    output.push(
      // @ts-ignore
      <div
        className={"opponent-area__opponent-container" + `opponent-${i + 1}`}
      >
        <p className={"opponent-container__opponent-name"}>{i + 1}</p>
        <div className="opponent-playmat" style={opponentPlaymatStyle}>
          <div className="opponent-hero"></div>
          <div className="opponent-deck"></div>
          <div className="opponent-discard"></div>
          <div className="opponent-stage"></div>
        </div>
      </div>
    );
  }
  return output;
};

export let opponentArea = (ctx) => {
  return (
    <div
      className="opponent-area"
      style={opponentAreaStyle as React.CSSProperties}
    >
      {opponentAreaContent(ctx)}
    </div>
  );
};
