import { combineReducers } from "redux";

const reducer = (
  state = {
    city: "kodarma",
    temp: "",
    country: "",
    location: "",
    type: "",
    sunrise: "",
    sunset: "",
    condition: "",
    humidity: "",
    wind: "",
  },
  action
) => {
  switch (action.type) {
    case "city":
      let newState = { ...state };
      newState.city = action.data.city;
      state = newState;
      break;
    case "setstate":
      let state1 = { ...state };
      state1.temp = action.data.temp;
      state1.type = action.data.type;
      state1.location = action.data.location;
      state1.country = action.data.country;
      state1.condition = action.data.condition;
      state1.humidity = action.data.humidity;
      state1.sunrise = action.data.sunrise;
      state1.wind = action.data.wind;
      state1.sunset = action.data.sunset;
      state = state1;
      break;
    default:
      return state;
  }
  return state;
};

const rootReducer = combineReducers({ searchbar: reducer });
export default rootReducer;
