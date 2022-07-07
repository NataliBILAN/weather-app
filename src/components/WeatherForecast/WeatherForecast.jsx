import React, { useState, useCallback } from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { getShortDay } from "../../helpers/helpers";

import axios from "axios";
import { useEffect } from "react";

export default function WeatherForecast({ coordinates, apiKey }) {
  const [forecastData, setForecastData] = useState(null);
  let longitude = coordinates.lon;
  let latitude = coordinates.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setForecastData(data.daily.slice(0, 5));
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [coordinates, getData]);

  return (
    <div>
      <ul className="forecast-list">
        {forecastData &&
          forecastData.map(({ temp, dt, weather }, index) => {
            const icon = weather[0].icon;
            return (
              <li className="forecast" key={index}>
                <p className="weak-day">{getShortDay(dt)}</p>
                <WeatherIcon icon={icon} size={60} />

                <div className="temperatures">
                  <span className="temperature-min">
                    {Math.round(temp.min)}
                  </span>{" "}
                  <span className="temperature-max">
                    {Math.round(temp.max)}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
