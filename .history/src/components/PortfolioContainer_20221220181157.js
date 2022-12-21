import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

  const portfolioArray = portfolio.map(po)
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
