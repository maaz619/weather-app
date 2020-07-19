import React, { Component } from "react";
import "./Weather.css";
import Axios from "axios";
import WeatherIcons from "./WeatherIcons";
import SearchBar from "./SearchBar";
import {
  WiCelsius,
  WiWindBeaufort0,
  WiHumidity,
  WiRaindrops,
} from "weather-icons-react";

class WeatherBox extends (Component, SearchBar) {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      location: "none",
      type: "",
      extra: [
        { title: "Time", value: "" },
        { title: "Sunrise", value: "" },
        { title: "Sunset", value: "" },
      ],
      details: [
        { title: "Temperature", value: "" },
        { title: "Condition", value: "" },
        { title: "Wind", value: "" },
        { title: "Humidity", value: "" },
      ],
    };
  }
  async componentDidMount() {
    const currentWeather = await Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=kodarma&appid=005979b9efbaa27908bf6de270165897"
    );
    this.thedata = currentWeather.data;
    this.setState({
      temp: Math.floor(this.thedata.main.temp - 273.15),
      location: this.thedata.name,
      type: this.thedata.weather[0].main,
      extra: [
        { title: "Time", value: <div>{this.thedata.timezone}</div> },
        { title: "Sunrise", value: <div>{this.thedata.sys.sunrise}</div> },
        { title: "Sunset", value: <div>{this.thedata.sys.sunset}</div> },
      ],
      details: [
        {
          title: "Temperature",
          value: (
            <div>
              {Math.floor(this.thedata.main.temp - 273.15)}
              <WiCelsius size={50} color="blue" />
            </div>
          ),
        },
        {
          title: "Condition",
          value: (
            <div>
              {this.thedata.weather[0].description}
              <WiRaindrops size={50} color="blue" />
            </div>
          ),
        },
        {
          title: "Wind",
          value: (
            <div>
              {this.thedata.wind.speed}
              <WiWindBeaufort0 size={50} color="blue" />{" "}
            </div>
          ),
        },
        {
          title: "Humidity",
          value: (
            <div>
              {this.thedata.main.humidity} <WiHumidity size={50} color="blue" />
            </div>
          ),
        },
      ],
    });
  }
  handleClick = async () => {
    const currentWeather = await Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=005979b9efbaa27908bf6de270165897"
    );
    this.thedata = currentWeather.data;
    this.setState({
      temp: Math.floor(this.thedata.main.temp - 273.15),
      location: this.thedata.name,
      type: this.thedata.weather[0].main,
      extra: [
        { title: "Time", value: <div>{this.thedata.timezone}</div> },
        { title: "Sunrise", value: <div>{this.thedata.sys.sunrise}</div> },
        { title: "Sunset", value: <div>{this.thedata.sys.sunset}</div> },
      ],
      details: [
        {
          title: "Temperature",
          value: (
            <div>
              {Math.floor(this.thedata.main.temp - 273.15)}
              <WiCelsius size={50} color="blue" />
            </div>
          ),
        },
        {
          title: "Condition",
          value: <div>{this.thedata.weather[0].description}</div>,
        },
        {
          title: "Wind",
          value: (
            <div>
              {this.thedata.wind.speed}
              <WiWindBeaufort0 size={50} color="blue" />{" "}
            </div>
          ),
        },
        {
          title: "Humidity",
          value: (
            <div>
              {this.thedata.main.humidity} <WiHumidity size={50} color="blue" />
            </div>
          ),
        },
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="weatherbox">
          <div className="temp-loc">
            <div className="location-box">
              <h1>{this.state.location}</h1>
            </div>
            <div className="temperature-box">
              {this.state.temp} <WiCelsius size={100} color="blue" />
            </div>
          </div>
          <div className="weather-type">
            <div className="type">
              <WeatherIcons type={this.state.type} />
              {this.state.type}
            </div>
          </div>
          <div className="today-forcast">
            {this.state.extra.map((extra, j) => (
              <div className="all-forcast" key={j}>
                <div className="title">{extra.title}</div>
                <div className="value">{extra.value}</div>
              </div>
            ))}
          </div>
          <div className="weather-details">
            {this.state.details.map((detail, i) => (
              <div className="ti-va" key={i}>
                <div className="title">{detail.title}</div>
                <div className="value">{detail.value}</div>
              </div>
            ))}
          </div>
          <div className="update-button">
            <div>
              <button className="btn btn-primary" onClick={this.handleClick}>
                refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherBox;
