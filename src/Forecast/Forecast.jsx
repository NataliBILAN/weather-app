import React from "react";

export default function Forecast() {
  return (
    <div>
      <h1 className="current-city">-</h1>
      <div>today</div>
      <div>weather-desc</div>

      <div className="current-day">
        <div className="column">
          <div>
            <span className="temperature">-</span>
            <span className="units">°C</span>
          </div>
          <img className="current-day-icon" alt="day-icon" />
        </div>

        <div className="column">
          <div>
            <span className="humidity">Humidity: </span>
            <span>humidity-%</span>
          </div>
          <div>
            <span className="wind">Wind: </span>
            <span>wind- km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
