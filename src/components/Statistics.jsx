import React from "react";

function Statistics() {
  return (
    <div className="statistics_main">
      {/* Stats card 1 */}
      <div className="statistics_div">
        <div className="statistics_header">
          <div className="statistics_header_details">
            <h2>28</h2>
            <h3>Categories</h3>
            <p>Suspendisse rutrum vulputate felis</p>
          </div>
          <div className="category_bg">
            <img src="./icons/category_icon.svg" alt="" />
          </div>
        </div>
        <div className="statistics_body">
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats card 2 */}
      <div className="statistics_div">
        <div className="statistics_header">
          <div className="statistics_header_details">
            <h2>18</h2>
            <h3>Products</h3>
            <p>Suspendisse rutrum vulputate felis</p>
          </div>
          <div className="products_bg">
            <img src="./icons/products_icon.svg" alt="" />
          </div>
        </div>
        <div className="statistics_body">
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats card 3 */}
      <div className="statistics_div">
        <div className="statistics_header">
          <div className="statistics_header_details">
            <h2>28</h2>
            <h3>Tokenized Assets</h3>
            <p>Suspendisse rutrum vulputate felis</p>
          </div>
          <div className="assets_bg">
            <img src="./icons/assets_icon.svg" alt="" />
          </div>
        </div>
        <div className="statistics_body">
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats card 4 */}
      <div className="statistics_div">
        <div className="statistics_header">
          <div className="statistics_header_details">
            <h2>$28k+</h2>
            <h3>My Investments</h3>
            <p>Suspendisse rutrum vulputate felis</p>
          </div>
          <div className="investments_bg">
            <img src="./icons/investments_icon.svg" alt="" />
          </div>
        </div>
        <div className="statistics_body">
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
          <div className="statistics_body_detail">
            <p>Product Category</p>
            <div className="statistics_body_detail_right">
              <div className="statistics_body_detail_right_div">
                <h4>15</h4>
              </div>
              <img src="./icons/arrow_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
