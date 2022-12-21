import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onClick }) {

  const portfolioArray = portfolio.map(stock => <Stock key={ stock.id } stock={ stock } onClick={ onClick }/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioArray
      }
    </div>
  );
}

export default PortfolioContainer;
