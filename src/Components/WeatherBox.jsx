import React from "react";
import "./Weather.css";

const WeatherBox = () => {
  const temp = 10 + "c";
  const location = "Koderma";
  const type = "Cloudy";
  const forcast = [10, 20, 30, 40, 50, 60];
  const details = [
    { title: "Temperature", value: 29 + "c" },
    { title: "Condition", value: "Sunny" },
    { title: "Wind", value: "6 km/h" },
    { title: "Humidity", value: "90%" },
  ];
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
          {forcast.map((tempa, j) => (
            <div className="all-forcast" key={j}>
              {tempa + "c"}
            </div>
          ))}
        </div>
        <div className="weather-details">
          {details.map((detail, i) => (
            <div className="ti-va" key={i}>
              <div className="title" key={i}>
                {detail.title}
              </div>
              <div className="value" key={i}>
                {detail.value}
              </div>
            </div>
          ))}
        </div>
        <div className="update-button">
          <button className="btn btn-primary"> refresh</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
