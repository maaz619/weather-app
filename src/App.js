import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherBox from "./Components/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const callbackFunction = (childdata) => {
    console.log(childdata);
  };
  const data = "hello";
  return (
    <div id="app">
      <SearchBar sendData={data} />
      <WeatherBox parentCallback={callbackFunction} />
    </div>
  );
};

export default App;
