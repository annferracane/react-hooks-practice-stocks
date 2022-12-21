import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  // Set State and 
  const baseURL = "http://localhost:3001/stocks";
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(stocks => setStocks(stocks))
    .catch(e => console.log(e));
  },[]);

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

  function sellStock(e) {
    
    e.stopPropagation();
    const id = parseInt(e.target.id); 
    const newPortfolio = portfolio.filter(stock => {
      return stock.id !== id
    });

    setPortfolio(newPortfolio);
  }

  function sortStocks(sortType){
    if(sortType === "Alphabetically") {
      const stocks = [...jokeData];
      sortedJokeData.sort((a, b) => a.votes > b.votes ? -1 : 1)
      return sortedJokeData;
    } else {

    }
  }

  function filterStocks(){

  }


  return (
    <div>
      <SearchBar sortStocks={ sortStocks }/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={ stocks } onClick={ buyStock }/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolio } onClick={ sellStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
