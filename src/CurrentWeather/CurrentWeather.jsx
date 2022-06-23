import React from "react";
import { getDay, getTime } from "../helpers/helpers";

export default function CurrentWeather({ data }) {
  const { date, iconUrl, temperature, wind, humidity, description, city } =
    data;

  return (
    <div>
      <h1 className="current-city">{city}</h1>
      <div className="current-time column">
        <div>{getDay(date)}</div> <div>{getTime(date)}</div>
      </div>

      <div>{description}</div>

      <div className="current-day">
        <div className="column">
          <div>
            <span className="temperature">{temperature}</span>
            <span className="units">°C</span>
          </div>
          <img className="current-day-icon" alt="day-icon" src={iconUrl} />
        </div>

        <div className="column">
          <div>
            <span className="precipitation">Precipitation: </span>
            <span>precipitation-%</span>
          </div>
          <div>
            <span className="humidity">Humidity: </span>
            <span>{humidity}%</span>
          </div>
          <div>
            <span className="wind">Wind: </span>
            <span>{wind} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
