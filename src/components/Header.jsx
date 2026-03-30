import React, { useState } from "react";
import Profile from "./Profile";

function Header({ showSidebar, setShowSidebar }) {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setShowLangDropdown(false);
  };

  return (
    <div className="header">
      <div className="ham_div">
        <img
          src="./icons/hamburger.svg"
          alt=""
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        />

        <h1>Invester Dashboard</h1>
      </div>

      <div className="header_div2">
        {/* Search Toggle Replace */}
        <div className="search_wrapper">
          {showSearchBar ? (
            <input
              type="text"
              placeholder="Search..."
              className="search_input"
              autoFocus
              onBlur={() => setShowSearchBar(false)}
            />
          ) : (
            <img
              src="./icons/search_icon.svg"
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => setShowSearchBar(true)}
            />
          )}
        </div>

        {/* Language Dropdown */}
        <div className="lang_wrapper">
          <div
            className="lang_div"
            onClick={() => setShowLangDropdown(!showLangDropdown)}
          >
            {selectedLang}
            <img src="./icons/arrow_down_lang.svg" alt="" />
          </div>

          {showLangDropdown && (
            <div className="lang_dropdown">
              <div onClick={() => handleLanguageChange("EN")}>EN</div>
              <div onClick={() => handleLanguageChange("FR")}>FR</div>
            </div>
          )}
        </div>

        <img src="./icons/bell_icon.svg" alt="" />

        <Profile />
      </div>
    </div>
  );
}

export default Header;
