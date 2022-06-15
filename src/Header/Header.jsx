import React from "react";
import Logo from "./../images/logo.png";

export default function Header() {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <span>AwesomeForecast</span>
    </div>
  );
}
