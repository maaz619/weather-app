import React from "react";
import "./App.css";
import WeatherBox from "./Components/WeatherBox";
import SearchBar from "./Components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div id="app">
      <SearchBar />
      <WeatherBox />
    </div>
  );
};

export default App;
