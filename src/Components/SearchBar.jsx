import React from "react";
import { setCity, setState } from "../store/action";
import { connect } from "react-redux";
import { WiRefresh } from "weather-icons-react";
import Axios from "axios";

const SearchBar = ({
  setCity,
  city,
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
}) => {
  const handleChange = (e) => {
    setCity(e.currentTarget.value);
  };

  const apidata = {
    api: "https://api.openweathermap.org/data/2.5/",
    api_key: "005979b9efbaa27908bf6de270165897",
  };
  const handleClick = () => {
    const fethchdata = async () => {
      const bundle = await Axios.get(
        `${apidata.api}weather?q=${city}&appid=${apidata.api_key}`
      );
      const bundles = bundle.data;
      console.log(bundles.main.temp);
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
  };

  return (
    <div className="searchbox-container">
      <div className="input-box">
        <input
          type="text"
          className="form-control"
          placeholder="Search for cities"
          onChange={handleChange}
          name="city"
          value={city}
        />
        <div onClick={handleClick}>
          <WiRefresh size={65} color="Blue" />
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

const mapDispatchToProps = { setCity, setState };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
