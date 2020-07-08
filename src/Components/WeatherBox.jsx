import React from "react";
import "./Weather.css";

const WeatherBox = () => {
  const temp = 10 + "c";
  const location = "Koderma";
  const type = "Cloudy";
  const forcast = [10, 20, 30, 40, 50, 60];
  return (
    <div className="container">
      <div className="weatherbox">
        <div className="temp-loc">
          <div className="location-box">
            <h1>{location}</h1>
          </div>
          <div className="temperature-box">{temp}</div>
        </div>
        <div className="weather-type">
          <div className="type">
            <h1>{type}</h1>
          </div>
        </div>
        <div className="today-forcast">
          {forcast.map((tempa, i) => (
            <div className="all-forcast">{tempa + "c"}</div>
          ))}
        </div>
        <div className="update-button">updater</div>
        <div className="weather-details">details</div>
      </div>
    </div>
  );
};

export default WeatherBox;
