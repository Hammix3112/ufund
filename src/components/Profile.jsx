import React, { useState } from "react";

function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  const username = "Asril Ibrahim";
  const email = "asril.ibrahim@example.com";

  const handleLogout = () => {
    // Yahan logout functionality implement kar sakte ho
    alert("Logged out!");
  };

  return (
    <div className="profile_wrapper">
      <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
        <div className="profile_img_div">
          <img src="./img/profile_img.png" alt="Profile" />
        </div>

        <div className="detail_div">
          <h2>{username}</h2>
          <p>Investor</p>
        </div>

        <div className={`profile_arrow_div ${showDropdown ? "rotate" : ""}`}>
          <img src="./icons/arrow_down.svg" alt="Arrow" />
        </div>
      </div>

      {showDropdown && (
        <div className="profile_dropdown">
          <div className="profile_info">
            <p>
              <strong>{username}</strong>
            </p>
            <p>{email}</p>
          </div>
          <button className="logout_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
