import React from "react";

function Wallet() {
  return (
    <div className="wallet_main">
      <div className="wallet_div">
        <div className="wallet_header">
          <h2>My Wallet</h2>
          <p>Suspendisse rutrum vulputate felis</p>
        </div>
        <div className="wallet_details">
          <div className="wallet_img">
            <img src="./icons/wallet_icon.svg" alt="" />
          </div>
          <div className="wallet_details_desc">
            <p className="p1">Total Balance</p>
            <h2>$28,000.00</h2>
            <div className="wallet_inc">
              <p>+24025.00</p>
              <img src="./icons/inc_arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <p className="details_p">
          <a href="#">
            View Details
            <img src="./icons/details_arrow_up.svg" alt="" />
          </a>
        </p>
      </div>
      <div className="investment_div">
        <div className="investment_header">
          <h2>My Products Investments</h2>
          <img src="./icons/invest_arrow_down.svg" alt="" />
        </div>
        <div className="investment_details_main">
          <div className="investment_details">
            <div className="investment_details2">
              <img src="./img/fiat.png" alt="" />
              <div className="investment_details_right">
                <div className="detail_coin">
                  <p>Fiat</p>
                  <img src="./icons/invest_arrow_down.svg" alt="" />
                </div>
                <h2>$12,000.00</h2>
              </div>
            </div>
            <div className="profit_inc">
              <p>+24.00</p>
              <img src="./icons/inc_arrow.svg" alt="" />
            </div>
          </div>
          <div className="investment_details">
            <div className="investment_details2">
              <img src="./img/btc.png" alt="" />
              <div className="investment_details_right">
                <div className="detail_coin">
                  <p>Fiat</p>
                  <img src="./icons/invest_arrow_down.svg" alt="" />
                </div>
                <h2>$12,000.00</h2>
              </div>
            </div>
            <div className="profit_inc">
              <p>+24.00</p>
              <img src="./icons/inc_arrow.svg" alt="" />
            </div>
          </div>
          <div className="investment_details">
            <div className="investment_details2">
              <img src="./img/eth.png" alt="" />
              <div className="investment_details_right">
                <div className="detail_coin">
                  <p>Fiat</p>
                  <img src="./icons/invest_arrow_down.svg" alt="" />
                </div>
                <h2>$12,000.00</h2>
              </div>
            </div>
            <div className="profit_dec">
              <p>+24.00</p>
              <img src="./icons/dec_arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
