import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        alt="travel journal logo"
        src="../../media/travel-journal-logo.png"
        className="header-logo"
      ></img>
      <div>my travel journal.</div>
    </div>
  );
};

export default Header;
