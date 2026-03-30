import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img src="./ufund_logo.svg" alt="" />
      </div>
      <div className="navbar_ul_div">
        <ul>
          <li>
            <img src="./icons/icon_2.svg" alt="" />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <img src="./icons/icon_2.svg" alt="" />
            <a href="#">Category</a>
          </li>
          <li>
            <img src="./icons/icon_3.svg" alt="" />
            <a href="#">Products</a>
          </li>
          <li>
            <img src="./icons/icon_4.svg" alt="" />
            <a href="#">Tokenized Assets</a>
          </li>
          <li>
            <img src="./icons/icon_5.svg" alt="" />
            <a href="#">Marketplace</a>
          </li>
          <li>
            <img src="./icons/icon_6.svg" alt="" />
            <a href="#">Exchange</a>
          </li>
          <li>
            <img src="./icons/icon_7.svg" alt="" />
            <a href="#">My Wallet</a>
          </li>
          <li>
            <img src="./icons/icon_8.svg" alt="" />
            <a href="#">My Investment</a>
          </li>
          <li>
            <img src="./icons/icon_9.svg" alt="" />
            <a href="#">Send Tokens</a>
          </li>
          <li>
            <img src="./icons/icon_10.svg" alt="" />
            <a href="#">My Yeilds</a>
          </li>
          <li>
            <img src="./icons/icon_11.svg" alt="" />
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
      <div className="logout_div">
        <button>
          <img src="./icons/logout_icon.svg" alt="" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
