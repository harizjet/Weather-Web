require("babel-polyfill");
const config = require("../config.js");

//temp key
const key = config.ACCUWEATHER_API_KEY;

// get city id
const getCity = async (city) => {
  const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const params = {
    apikey: key,
    q: city,
    language: "en-us",
    details: false,
  };

  let query =
    "?" +
    Object.keys(params)
      .map((k) => `${k}=${params[k]}`)
      .join("&");
  let response = await fetch(url + query);
  let data = await response.json();

  return data[0];
};

// get weather information
const getWeather = async (locationId) => {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationId}`;
  const params = {
    apikey: key,
    language: "en-us",
    details: false,
  };

  let query =
    "?" +
    Object.keys(params)
      .map((k) => `${k}=${params[k]}`)
      .join("&");
  let response = await fetch(url + query);
  let data = await response.json();

  return data[0];
};

module.exports = { getCity, getWeather };
