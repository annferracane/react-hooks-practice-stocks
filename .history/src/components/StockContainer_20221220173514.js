import React from "react";
import Stock from "./Stock";

function StockContainer() {

  const baseURL = "http://localhost:3001/stocks";

  useEffect(() => {
    fetch(baseURL)
    .then()
    .then()
    .catch()
  })

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
