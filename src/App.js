import React from "react";

import Header from "./Header/index";
import Weather from "./Weather/index";
import Footer from "./Footer/index";

import "./App.css";

export default function App() {
  return (
    <div className="forecast-wrapper">
      <div className="container">
        <Header />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
