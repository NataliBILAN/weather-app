import axios from "axios";

const apiKey = "317060cebfc3d71d209b91e26b8129c0";
const city = "Lviv";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

export const getData = async () => {
  const { data } = await axios.get(url);
  return data;
};
