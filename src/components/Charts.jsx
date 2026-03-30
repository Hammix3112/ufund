import React from "react";
import HistoryChart from "./HistoryChart";
import InvestPieChart from "./InvestPieChart";
import EarningsPieChart from "./EarningsPieChart";

function Charts() {
  return (
    <div className="charts_main">
      <HistoryChart />
      <InvestPieChart />
      <EarningsPieChart />
    </div>
  );
}

export default Charts;
