import React from "react";

import Header from "./components/Header/index";
import Weather from "./components/Weather/index";
import Footer from "./components/Footer/index";

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
