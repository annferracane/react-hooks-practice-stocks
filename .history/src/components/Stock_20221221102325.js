import React from "react";

function Stock({ stock, onClick }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" id={ stock.id } onClick={ k }>{ stock.name }</h5>
          <p className="card-text">{ stock.ticker }: { stock.price }</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
