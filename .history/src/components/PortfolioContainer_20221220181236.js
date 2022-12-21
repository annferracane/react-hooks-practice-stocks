import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

  const portfolioArray = portfolio.map(stock => <Stock key={ stock.id } stock={ stock }/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
