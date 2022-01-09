import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <i class="fas fa-fire"></i>
      </div>
      <div className="app-name">
        <span className="app-name-span">
          OnTheGo
        </span>
      </div>
    </div>
  );
}

export default Header;
