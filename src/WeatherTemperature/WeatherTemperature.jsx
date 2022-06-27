import React, { useState } from "react";
import classNames from "classnames";

export default function WeatherTemperature({ celsiusTemperature }) {
  const [unit, setUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(celsiusTemperature);

  const handleClickTofahrenheit = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
    const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    setTemperature(Math.round(fahrenheitTemperature));
  };

  const handleClickToCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
    setTemperature(celsiusTemperature);
  };
  return (
      <div className="weather-temperature">
        <span className="temperature">{temperature}</span>
        <span className="units">
          <a
            href=""
            onClick={handleClickToCelsius}
            className={classNames("unit-link", {
              "disabled-link": unit === "celsius",
            })}
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href=""
            onClick={handleClickTofahrenheit}
            className={classNames("unit-link", {
              "disabled-link": unit === "fahrenheit",
            })}
          >
            °F
          </a>
        </span>
      </div>
  );
}
