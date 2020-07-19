import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "", matchingcity: [] };
    this.cities = [
      "koderma",
      "kolkata",
      "jharkhand",
      "bokaro",
      "pakur",
      "giridih",
    ];
  }
  filterCity = (e) => {
    const filtered =
      this.state.city !== ""
        ? this.cities.filter((city) => city.includes(this.state.city))
        : [];
    this.setState({
      matchingcity: filtered,
    });
  };
  handleBlur = (e) => {
    this.setState({
      matchingcity: [],
    });
  };
  handleChange = (e) => {
    const currentCity = e.currentTarget.value;
    this.setState(
      {
        city: currentCity,
      },
      this.filterCity
    );
  };
  handleClick = (city) => {
    this.setState({ city });
  };
  // handleFocus = (e) => {
  //   this.setState({ city: "" });
  // };
  render() {
    return (
      <div className="searchbox-container" onBlur={this.handleBlur}>
        <div className="input-box">
          <input
            type="search"
            className="form-control input"
            placeholder="Search for cities"
            onChange={this.handleChange}
            name="city"
            value={this.state.city}
            onFocus={(this.value = [])}
          />
        </div>
        <div className="autocomplete">
          {this.state.matchingcity.map((city, i) => (
            <div
              className="autocomplete-items"
              onMouseDown={() => {
                this.handleClick(city);
              }}
              key={i}
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
