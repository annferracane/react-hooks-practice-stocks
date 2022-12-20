import React, { useState, useEffect }from "react";
import Stock from "./Stock";

function StockContainer() {

  const baseURL = "http://localhost:3001/stocks";
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(stocks => setStocks(stocks))
    .catch(e => console.log(e));
  },[]);

  const stockArray = stocks.map(stock => <Stock keystock={ stock }/>);

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
