export const setCity = (city) => {
  return {
    type: "city",
    data: {
      city,
    },
  };
};
export const setState = ({
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
  return {
    type: "setstate",
    data: {
      temp,
      country,
      location,
      type,
      condition,
      humidity,
      wind,
      sunrise,
      sunset,
    },
  };
};
