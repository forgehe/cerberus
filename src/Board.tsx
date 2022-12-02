// @ts-check

import React from "react";

export function CerberusField({ ctx, G, moves }) {
  const onClick = (id) => moves.clickCell(id);

  const cellStyle = {
    border: "1px solid #555",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    // textAlign: "center",
  };

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

  let tbody = [];
  // for (let i = 0; i < 3; i++) {
  //   let cells = [];
  //   for (let j = 0; j < 3; j++) {
  //     const id = 3 * i + j;
  //     cells.push(
  //       <td key={id}>
  //         {G.cells[id] ? (
  //           <div style={cellStyle}>{G.cells[id]}</div>
  //         ) : (
  //           <button style={cellStyle} onClick={() => onClick(id)} />
  //         )}
  //       </td>
  //     );
  //   }
  //   tbody.push(<tr key={i}>{cells}</tr>);
  // }
  let opponentArea = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    opponentArea.push(
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

  let mainboardArea = (
    <div className="mainboard-area">
      <div id="2nd"></div>
    </div>
  );

  return (
    <div>
      {tbody}
      <div className="opponent-area" style={opponentAreaStyle}>
        {opponentArea}
      </div>
      {mainboardArea}
    </div>
  );
}
