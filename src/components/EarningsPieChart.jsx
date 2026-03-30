import React from "react";

function EarningsPieChart() {
  return (
    <div className="earningsPieChart_main">
      <div className="earningsPieChart_header">
        <h2>All My Earnings</h2>
        <p>Suspendisse rutrum vulputate felis</p>
      </div>

      <div className="earningsPieChart_body">
        <div className="chart"></div>

        <div className="chart_detail">
          <div className="detail_item">
            <span className="dot purple"></span>
            <p>All my Dollar Invested</p>
            <h4>$50.00</h4>
          </div>

          <div className="detail_item">
            <span className="dot light"></span>
            <p>All my BTC Invested</p>
            <h4>$150.00</h4>
          </div>

          <div className="detail_item">
            <span className="dot dark"></span>
            <p>All my ETH Invested</p>
            <h4>$1500.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarningsPieChart;
