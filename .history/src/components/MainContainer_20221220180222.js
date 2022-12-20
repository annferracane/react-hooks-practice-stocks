import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  function buyStock(e) {
    e.event.stopPropagation();
    console.log(e.target);
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer buyStock={ buyStock }/>
        </div>
        <div className="col-4">
          <PortfolioContainer buyStock={ buyStock } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
