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
    .then()
    .catch(e => console.log(e));
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer buyStock={ buyStock }/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
