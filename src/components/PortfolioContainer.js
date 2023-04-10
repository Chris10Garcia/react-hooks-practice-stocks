import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,addRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      { stocks.length > 0 
          ? stocks.map( stock => { return <Stock stock={stock} key={stock.id} addRemoveStock={addRemoveStock}/> } ) 
          : null }
    </div>
  );
}

export default PortfolioContainer;
