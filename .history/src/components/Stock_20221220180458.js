import React from "react";

function Stock({ stock, buyStock }) {
  return (
    <div>
      <div className="card" id={ stock.id } >
        <div className="card-body">
          <h5 className="card-title" onClick={ buyStock }>{ stock.name }</h5>
          <p className="card-text">{ stock.ticker }: { stock.price }</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
