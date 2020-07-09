import React, { Component } from "react";
import "./Weather.css";
import Axios from "axios";

class WeatherBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      location: [],
      type: "",
      forcast: [],
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
      "https://api.openweathermap.org/data/2.5/weather?id=1266414&appid=005979b9efbaa27908bf6de270165897"
    );
    this.thedata = currentWeather.data;
    this.setState({
      temp: this.thedata.main.temp,
      location: this.thedata.name,
      type: this.thedata.weather[0].main,
      details: [
        { title: "Temperature", value: this.thedata.main.temp },
        { title: "Condition", value: [this.thedata.weather[0].description] },
        { title: "Wind", value: this.thedata.wind.speed },
        { title: "Humidity", value: this.thedata.main.humidity },
      ],
    });
  }
  handleClick = async () => {
    const currentWeather = await Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?id=1266414&appid=005979b9efbaa27908bf6de270165897"
    );
    this.thedata = currentWeather.data;
    this.setState({
      temp: this.thedata.main.temp,
      loaction: this.thedata["name"],
      type: this.thedata.weather[0].main,
      details: [
        { title: "Temperature", value: this.thedata.main.temp },
        { title: "Condition", value: this.thedata.weather[0].description },
        { title: "Wind", value: this.thedata.wind.speed },
        { title: "Humidity", value: this.thedata.main.humidity },
      ],
    });
    console.log("clicked");
  };
  render() {
    return (
      <div className="container">
        <div className="weatherbox">
          <div className="temp-loc">
            <div className="location-box">
              <h1>{this.state.location}</h1>
            </div>
            <div className="temperature-box">{this.state.temp}</div>
          </div>
          <div className="weather-type">
            <div className="type">
              <h1>{this.state.type}</h1>
            </div>
          </div>
          <div className="today-forcast">
            {this.state.forcast.map((temperature, j) => (
              <div className="all-forcast" key={j}>
                {temperature + "c"}
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
