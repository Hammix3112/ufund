import React from "react";

function InvestPieChart() {
  return (
    <div className="pieChart_main">
      <div className="pieChart_header">
        <h2>All My Investments</h2>
        <p>Suspendisse rutrum vulputate felis</p>
      </div>

      <div className="pieChart_body">
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

export default InvestPieChart;
