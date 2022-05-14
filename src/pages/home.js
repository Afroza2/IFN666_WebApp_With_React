import React from "react";
import stock from "../images/stock.png"

function home() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Stock Prices</h3>
        <img src={stock} alt="stock" width="5%" />
      </div>
      <p>
        Welcome to the Stock Market Portal. You may click on stocks to view all
        the available companies or Quote to get the latest price information by
        stock symbol, or choose Price History or search to sample from the most
        recent one hundred days of information for a particular stock.
      </p>
    </div>
  );
}

export default home;
