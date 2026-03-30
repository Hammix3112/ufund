import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Investments from "./components/Investments";
import Statistics from "./components/Statistics";
import BuyHistoryTable from "./components/BuyHistoryTable";
import BuyInvestHistory from "./components/buyInvestHistory";
import Charts from "./components/Charts";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="main_div">
      {showSidebar && <NavBar />}

      <div className="right_section">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Investments />
        <Statistics />
        <BuyHistoryTable />
        <Charts />
        <BuyInvestHistory />
      </div>
    </div>
  );
}

export default App;
