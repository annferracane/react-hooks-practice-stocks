import React from "react";
import Stock from "./Stock";

function StockContainer() {

  useEffect(() => {
    fetch()
  })

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
