import React, { useState, useEffect }from "react";
import Stock from "./Stock";

function StockContainer( { stocks, onClick } ) {

  const stockArray = stocks.map(stock => <Stock key={ stock.id } stock={ stock } onClick={ onClick }/>);

  return (
    <div>
      <h2>Stocks</h2>
      { stockArray }
    </div>
  );
}

export default StockContainer;
