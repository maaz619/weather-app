import React from "react";
import "./Weather.css";
import Axios from "axios";
import WeatherIcons from "./WeatherIcons";
import "./SearchBar.css";
import { connect } from "react-redux";
import { setCity, setState } from "../store/action";

import { WiHumidity, WiRaindrops, WiWindDeg } from "weather-icons-react";
import { useEffect } from "react";
const WeatherBox = ({
  setState,
  temp,
  country,
  location,
  type,
  condition,
  humidity,
  wind,
  sunrise,
  sunset,
  city,
}) => {
  const apidata = {
    api: "https://api.openweathermap.org/data/2.5/",
    api_key: "005979b9efbaa27908bf6de270165897",
  };
  useEffect(() => {
    const fethchdata = async () => {
      const bundle = await Axios.get(
        `${apidata.api}weather?q=${city}&appid=${apidata.api_key}`
      );
      const bundles = bundle.data;
      setState({
        temp: bundles.main.temp,
        country: bundles.sys.country,
        type: bundles.weather[0].main,
        condition: bundles.weather[0].description,
        wind: bundles.wind.speed,
        humidity: bundles.main.humidity,
        location: bundles.name,
        sunrise: bundles.sys.sunrise,
        sunset: bundles.sys.sunset,
      });
    };
    fethchdata();
  }, [setState]);
  function timeStamp(RiseSet) {
    let date = new Date(RiseSet * 1000);
    let hour = date.getHours();
    let minute = "0" + date.getMinutes();
    let second = "0" + date.getSeconds();
    return hour + ":" + minute.substr(-2) + ":" + second.substr(-2);
  }

  const extra = [
    { title: "Sunrise", value: <div>{timeStamp(sunrise)}</div> },
    { title: "Sunset", value: <div>{timeStamp(sunset)}</div> },
  ];
  const details = [
    {
      title: "Temp..",
      value: <div>{Math.floor(temp - 273.15)} &#8451;</div>,

      title1: "Condition",
      value1: (
        <div>
          {condition}
          <WiRaindrops size={30} color="blue" />
        </div>
      ),
    },
    {
      title: "Wind",
      value: (
        <div>
          {wind}
          <WiWindDeg size={30} color="blue" />
        </div>
      ),

      title1: "Humidity",
      value1: (
        <div>
          {humidity} <WiHumidity size={30} color="blue" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="weather__container">
        <div className="weatherbox">
          <div className="location__box">
            {location + ",  " + country}
            <h6>{new Date().toDateString()}</h6>
          </div>
          <div className="temperature__box">
            {Math.floor(temp - 273.15)} &#8451;
          </div>
          <div className="type">
            <WeatherIcons type={type} />
            {type}
          </div>
          <div className="sunrise__sunset">
            {extra.map((extra, j) => (
              <div className="all__details" key={j}>
                <div className="title">{extra.title}</div>
                <div className="value">{extra.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="weather__details">
          {details.map((detail, i) => (
            <div className="ti__va" key={i}>
              <div className="one">
                <div className="title1">{detail.title}</div>
                <h5>{detail.value}</h5>
              </div>
              <div className="two">
                <div className="title1">{detail.title1}</div>
                <h5>{detail.value1}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    city,
    temp,
    country,
    location,
    type,
    condition,
    humidity,
    wind,
    sunrise,
    sunset,
  } = state.searchbar;
  return {
    city,
    temp,
    country,
    location,
    type,
    condition,
    humidity,
    wind,
    sunrise,
    sunset,
  };
};
const mapDispatchToProps = { setState, setCity };
export default connect(mapStateToProps, mapDispatchToProps)(WeatherBox);
