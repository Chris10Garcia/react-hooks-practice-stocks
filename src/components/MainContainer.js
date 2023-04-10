import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const API = 'http://localhost:3001/stocks'

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [purchased, setPurchased] = useState([])
  const [filter, setFilter] = useState("Tech")

  // for category, i can feed it into the API link 
  useEffect( () => {

    fetch(API + "?type_like=" + filter)
    .then( r => r.json())
    .then( d => setStocks(d))
  }, [filter])

  function sortStocks(value){
    const sortedStocks = [...stocks]
    const key = {Alphabetically : "name", Price : "price"}

    sortedStocks.sort((a, b) => {
      return (a[key[value]] > b[key[value]]) ? 1 : (a[key[value]] < b[key[value]] ) ? -1 : 0 }
    )
    setStocks(sortedStocks)
  }

  function addRemoveStock(text, id){
    if (text === "Stocks" && !(purchased.find(stock => stock.id === id))){
        setPurchased([...purchased, stocks.find(stock => stock.id === id)])
    } else if ( text === "My Portfolio") {
        setPurchased(purchased.filter(stock => stock.id !== id))
    }
  }




  return (
    <div>
      <SearchBar setFilter={setFilter} sortStocks={sortStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addRemoveStock={addRemoveStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={purchased} addRemoveStock={addRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
