import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const baseURL = "http://localhost:3001/stocks/";
  const [portfolio, setPortfolio] = useState([]);

  function buyStock(e) {
    e.stopPropagation();
    const id = e.target.id; 
    const fetchURL = baseURL + id;

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
    const id = e.target.id; 

    const newPortfolio = portfolio.filter(stock => stock.id !== )

  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onClick={ buyStock }/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolio } onClick={ sellStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
