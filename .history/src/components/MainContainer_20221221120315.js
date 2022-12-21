import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  // Set State and Main Variables
  const baseURL = "http://localhost:3001/stocks";
  const [stocks, setStocks] = useState([]);
  const [stockDisplay, setStockDisplay] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  // Fetch initial stock data from db.json
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(stocks => {
      setStocks(stocks)
    })
    .catch(e => console.log(e));
  },[]);

  // Function to buy a stock and add to portfolio
  function buyStock(e) {
    e.stopPropagation();
    const id = e.target.id; 
    const fetchURL = baseURL + "/" + id;

    fetch(fetchURL)
    .then(resp => resp.json())
    .then(stock => {
      const newPortfolio = [...portfolio, stock];
      setPortfolio(newPortfolio);
    })
    .catch(e => console.log(e));
  }

  // Function to sell a stock and remove from portfolio
  function sellStock(e) {
    
    e.stopPropagation();
    const id = parseInt(e.target.id); 
    const newPortfolio = portfolio.filter(stock => {
      return stock.id !== id
    });

    setPortfolio(newPortfolio);
  }

  // Function which sorts stocks alphabetically or by price
  function sortStocks(sortType){
    const newStocks = [...stocks];
    if(sortType === "Alphabetically") {
      newStocks.sort((a, b) => a.name > b.name ? 1 : -1);
    } else {
      newStocks.sort((a, b) => a.price > b.price ? -1 : 1);
    }

    setStockDisplay(newStocks);
  }

  // Function that filters stocks by some criteria
  function filterStocks(criteria){
    console.log(criteria);
    const newStocks = [...stocks];
    const filteredStocks = newStocks.filter(stock => stock.type === criteria);
    setStockDisplay(filteredStocks);
  }


  return (
    <div>
      <SearchBar sortStocks={ sortStocks } filterStocks={ filterStocks }/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={ stockDisplay } onClick={ buyStock }/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolio } onClick={ sellStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
