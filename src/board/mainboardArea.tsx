import React from "react";
import "./mainboardArea.scss";

let shopCards = () => {
  let cards: React.ReactElement[] = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<div className="shop_card" id={`shop_card${i}`}></div>);
  }
  return cards;
};

export let mainboardArea = (
  <div className="mainboard-area">
    <div className="mainboard-area_dkw-container">
      <div className="mainboard-area_deck"></div>
      <div className="mainboard-area_kick"></div>
      <div className="mainboard-area_weakness"></div>
    </div>
    <div className="mainboard-area_shop">{shopCards()}</div>
    <div className="mainboard-area_stage"></div>
    <div className="mainboard-area_hero"></div>
  </div>
);
