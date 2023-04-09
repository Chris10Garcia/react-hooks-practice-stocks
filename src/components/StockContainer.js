import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      { stocks.length > 0 
          ? stocks.map( stock => { return <Stock stock={stock} key={stock.id}/> } ) 
          : null }
    </div>
  );
}

export default StockContainer;
