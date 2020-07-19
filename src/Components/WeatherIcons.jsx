import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiRainMix,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiNightPartlyCloudy,
  WiCloudRefresh,
  WiTornado,
  WiSmoke,
  WiSleet,
  WiDayHaze,
  WiDust,
  WiSandstorm,
  WiVolcano,
} from "weather-icons-react";
const icons = [
  { title: "clear sky", value: <WiDaySunny size={100} color="purple" /> },
  { title: "few clouds", value: <WiCloud size={100} color="purple" /> },
  {
    title: "scattered clouds",
    value: <WiNightPartlyCloudy size={100} color="purple" />,
  },
  {
    title: "broken clouds",
    value: <WiCloudRefresh size={100} color="purple" />,
  },
  { title: "shower rain", value: <WiRainMix size={100} color="purple" /> },
  { title: "Rain", value: <WiRain size={100} color="purple" /> },
  {
    title: "thunderstorm",
    value: <WiThunderstorm size={100} color="purple" />,
  },
  { title: "snow", value: <WiSnow size={100} color="purple" /> },
  { title: "mist", value: <WiFog size={100} color="purple" /> },
  { title: "Clear", value: <WiDaySunny size={100} color="purple" /> },
  { title: "Clouds", value: <WiCloud size={100} color="purple" /> },
  {
    title: "Tornado",
    value: <WiTornado size={100} color="purple" />,
  },
  {
    title: "Smoke",
    value: <WiSmoke size={100} color="purple" />,
  },
  { title: "Drizzle", value: <WiSleet size={100} color="purple" /> },
  { title: "Haze", value: <WiDayHaze size={100} color="purple" /> },
  {
    title: "Dust",
    value: <WiDust size={100} color="purple" />,
  },
  { title: "sand", value: <WiSandstorm size={100} color="purple" /> },
  { title: "Ash", value: <WiVolcano size={100} color="purple" /> },
];

const Weathericons = ({ type }) => {
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].title === type) {
      return icons[i].value;
    }
  }
  return null;
};

export default Weathericons;
