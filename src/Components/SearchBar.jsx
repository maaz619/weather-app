import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      matchingCity: [],
    };
    this.cities = [
      "Koderma",
      "Kolkata",
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Mumbai",
      "Delhi",
      "Jaipur",
      "Ranchi",
    ];
  }

  filterCity = () => {
    const filteredCities =
      this.state.city != ""
        ? this.cities.filter((city) => city.includes(this.state.city))
        : [];
    this.setState({
      matchingCity: filteredCities,
    });
  };

  handleChange = (e) => {
    const value = e.currentTarget.value;
    this.setState(
      {
        city: value,
      },
      this.filterCity
    );
  };

  handleOutsideClick = (e) => {
    this.setState({
      matchingCity: [],
    });
  };
  render() {
    return (
      <div className="searchbox-container">
        <div className="searchbox">
          <input
            className="form-control searchbox-input"
            type="text"
            placeholder="Search for cities"
            value={this.state.city}
            onChange={this.handleChange}
            onBlur={this.handleOutsideClick}
            name="city"
          />
        </div>
        <div className="autocomplete-container">
          {this.state.matchingCity.map((city, i) => (
            <div className="autocomplete-item" key={i}>
              {city}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
