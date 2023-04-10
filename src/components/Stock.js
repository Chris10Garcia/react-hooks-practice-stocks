import React from "react";

function Stock({stock, addRemoveStock}) {
  const {name, price, id, ticker} = stock
  return (
    <div>
      <div className="card" onClick={e => addRemoveStock(e.target.parentNode.parentNode.childNodes[0].innerText, id)}>
        <div className="card-body" style = {{pointerEvents : "none"}}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
