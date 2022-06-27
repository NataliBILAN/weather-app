import React, { useState, useEffect } from "react";
import InputSearch from "./../InputSearch";
import CurrentWeather from "./../CurrentWeather";

import axios from "axios";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Rotterdam");

  const apiKey = "317060cebfc3d71d209b91e26b8129c0";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setData({
        isReady: true,
        date: new Date(data.dt * 1000),
        temperature: Math.round(data.main.temp),
        wind: Math.round(data.wind.speed),
        humidity: Math.round(data.main.humidity),
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        city: data.name,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    getData();
  };

  const handleInputChange = ({ target }) => {
    setCity(target.value);
  };

  const handleEnterPush = ({ key }) => {
    if (key === "Enter") {
      getData();
    }
  };

  return (
    <>
      <InputSearch
        onClick={handleSubmit}
        onChange={handleInputChange}
        onKeyDown={handleEnterPush}
      />
      {data ? <CurrentWeather data={data} /> : "Loading..."}
    </>
  );
}
