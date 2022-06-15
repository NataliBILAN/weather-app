import React from "react";

import Header from "./Header/index";
import Form from "./Form/index";
import Forecast from "./Forecast/index";
import Footer from "./Footer/index";

import "./App.css";

export default function App() {
  return (
    <div className="forecast-wrapper">
      <div className="container">
        <Header />
        <Form />
        <Forecast />
        <div>forecast</div>
        <Footer />
      </div>
    </div>
  );
}
