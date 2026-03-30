import React from "react";
import Wallet from "./Wallet";
import Earnings from "./Earnings";

function Investments() {
  return (
    <div className="investments_main">
      <Wallet />
      <Earnings />
    </div>
  );
}

export default Investments;
