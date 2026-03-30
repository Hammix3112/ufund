import { useState } from "react";

function BuyInvestHistory() {
  const data = [
    {
      id: 1,
      productName: "Product Name",
      productDesc: "Suspendisse rutrum vulputate felis",
      productImg: "./img/eth.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "24 July 2023",
      maturityDate: "24 July 2024",
      status: "Active",
    },
    {
      id: 2,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/btc.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Pending Approval",
    },
    {
      id: 3,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/fiat.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Active",
    },

    {
      id: 4,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/product_image1.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Customer",
    },
    {
      id: 5,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/product_image2.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Customer",
    },

    {
      id: 6,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/product_image3.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Pending Approval",
    },

    {
      id: 7,
      productName: "Product Name",
      productDesc: "Crypto investment plan",
      productImg: "./img/eth.png",
      category: "Category Name",
      paymentMethod: "Method",
      amount: "$1000",
      investmentDate: "10 Aug 2023",
      maturityDate: "10 Aug 2024",
      status: "Active",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 7;

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;

  const currentRows = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="buyInvestHistory_main">
      <div className="buyInvestHistory_header">
        <div className="first_button">
          <h2>Buy and invest History</h2>
          <p>Suspendisse rutrum vulputate felis</p>
        </div>
        <div className="second_buttons">
          <button className="search_button">
            <img src="./icons/search_icon.svg" alt="" />
            <input type="search" placeholder="Search" />
          </button>
          <button className="filter_button">
            {" "}
            <img src="./icons/filter_icon.svg" alt="" /> Filter
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th className="icon_th">
              Product/Token
              <img src="./icons/table_arrow_down.svg" alt="" />
            </th>
            <th>Category</th>
            <th>Payment Method</th>
            <th>Amount</th>
            <th>Buy/Invest Date</th>
            <th>Maturity Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>

              <td className="img_td">
                <img src={item.productImg} alt="" />
                <div className="product_info">
                  <p className="product_name">{item.productName}</p>
                  <p className="product_desc">{item.productDesc}</p>
                </div>
              </td>

              <td>{item.category}</td>
              <td>{item.paymentMethod}</td>
              <td>{item.amount}</td>

              <td>{item.investmentDate}</td>
              <td>{item.maturityDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <img src="./icons/page_arrow_left.svg" alt="" />
          Previous
        </button>
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active_page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next <img src="./icons/page_arrow_right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default BuyInvestHistory;
