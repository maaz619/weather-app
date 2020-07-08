import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbox">
      <div className="input">
        <input
          type="text"
          className="form-control"
          placeholder="Search for cities"
        />
      </div>
      <button className="btn btn-danger">SEARCH</button>
    </div>
  );
};

export default SearchBar;
