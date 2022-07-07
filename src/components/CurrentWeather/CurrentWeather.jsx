import React from "react";
import { getDay, getTime } from "../../helpers/helpers";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherTemperature from "../WeatherTemperature";

export default function CurrentWeather({ currentDayData }) {
  const { date, icon, temperature, wind, humidity, description, city } =
    currentDayData;

  return (
    <div>
      <h1 className="current-city">{city}</h1>
      <div className="current-time column">
        <div className="weekday">{getDay(date)}</div> <div>{getTime(date)}</div>
      </div>

      <div>{description}</div>

      <div className="current-day">
        <div className="column">
          <WeatherTemperature celsiusTemperature={temperature} />
          <WeatherIcon icon={icon} size={60} />
        </div>

        <div className="column">
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
