import React, { useState, useEffect, useCallback } from "react";
import InputSearch from "./../InputSearch";
import CurrentWeather from "./../CurrentWeather";

import axios from "axios";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Rotterdam");
  const [submitting, setSubmitting] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const apiKey = "317060cebfc3d71d209b91e26b8129c0";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getData = useCallback(async () => {
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
  }, [url]);

  useEffect(() => {
    if (submitting) {
      getData();
      setSubmitting(false);
    }
  }, [getData, submitting]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
    setCity("");
  };

  const handleInputChange = ({ target }) => {
    setCity(target.value);
    setIsEmpty(false);
  };

  const handleEnterClick = ({ key }) => {
    if (key === "Enter") {
      getData();
      setIsEmpty(true);
      setCity("");
    }
  };

  const handleResetButtonClick = () => {
    setIsEmpty(true);
    setCity("");
  };

  const onFocusHandle = () => {
    if (city !== "") setIsEmpty(false);
  };
  return (
    <>
      <InputSearch
        onClick={handleSubmit}
        handleResetButtonClick={handleResetButtonClick}
        onChange={handleInputChange}
        onKeyDown={handleEnterClick}
        isEmpty={isEmpty}
        value={city}
        onFocusHandle={onFocusHandle}
      />
      {data ? <CurrentWeather data={data} /> : "Loading"}
    </>
  );
}
