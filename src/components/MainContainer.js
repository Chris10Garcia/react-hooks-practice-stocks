import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const API = 'http://localhost:3001/stocks'

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [purchased, setPurchased] = useState([])

  useEffect( () => {

    fetch(API)
    .then( r => r.json())
    .then( d => setStocks(d))
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={purchased} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
