import React from "react";

import "./TrendCard.css";
import trendData from "../../Data/trendData.js";

function TrendCard() {
  return (
    <div className="trendCard">
      <h3> Top Blockchains by your followers </h3>
      {trendData.map((trend, id) => {
        return (
          <div key={id} className="trend">
            <span> #{trend.name} </span>
            <span> {trend.popularity} </span>
          </div>
        );
      })}
    </div>
  );
}

export default TrendCard;
