import React, { useState, useEffect } from "react";

import Header from "./Header/index";
import Weather from "./Weather/index";
import Footer from "./Footer/index";

import "./App.css";

export default function App() {
  const [error, setError] = useState(null);

  return (
    <div className="forecast-wrapper">
      <div className="container">
        <Header />
        <Weather />
        <div>forecast</div>
        <Footer />
      </div>
    </div>
  );
}
