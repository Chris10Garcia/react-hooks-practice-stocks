import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const API = 'http://localhost:3001/stocks'

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [purchased, setPurchased] = useState([])
  const [searchData, setSearchData] = useState({
    INPUT : "",
    SELECT : "Tech"
  })

  useEffect( () => {

    fetch(API)
    .then( r => r.json())
    .then( d => setStocks(d))
  }, [])


  const filteredStocks = stocks.filter(stock => {
        return stock.type === searchData.SELECT})

  return (
    <div>
      <SearchBar setSearchData={setSearchData}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={purchased} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
