import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addRemoveStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      { stocks.length > 0 
          ? stocks.map( stock => { return <Stock stock={stock} key={stock.id} addRemoveStock={addRemoveStock}/> } ) 
          : null }
    </div>
  );
}

export default StockContainer;
