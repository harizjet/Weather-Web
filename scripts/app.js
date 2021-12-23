const { vue_name, vue_condition, vue_temp } = require("../scripts/vue.js");
const { getCity, getWeather } = require("../scripts/forecast.js");
const cityForm = document.querySelector("form.change-location");
const card = document.querySelector(".card");
const timeimg = document.querySelector(".card img");
const iconimg = document.querySelector(".icon img");
const alertbox = document.querySelector(".alert .closebtn");

const updateUI = (data) => {
  let citytime = data.infos.IsDayTime ? "day" : "night";
  let cityicons = data.infos.WeatherIcon;
  let cityname = data.location.EnglishName;
  let citycondition = data.infos.WeatherText;
  let citytemperature = data.infos.Temperature.Metric.Value;

  // remove alert if exists
  alertbox.parentElement.classList.add("d-none");

  // update image
  timeimg.src = `../asset/${citytime}.svg`;

  // update icon
  iconimg.src = `../asset/icons/${cityicons}.svg`;

  // update cityname
  vue_name.updateData(cityname);

  // update citycondition
  vue_condition.updateData(citycondition);

  // update citytemp
  vue_temp.updateData(citytemperature);

  // show the results
  card.classList.remove("d-none");
};

const updateCity = async (cityname) => {
  let location = await getCity(cityname);
  let infos = await getWeather(location.Key);

  return { location, infos };
};

cityForm.addEventListener("submit", (event) => {
  // prevent default action
  event.preventDefault();

  // get city value
  let cityname = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(cityname)
    .then((data) => updateUI(data))
    .catch((err) => {
      alertbox.parentElement.classList.remove("d-none");
      console.log(err);
    });
});

alertbox.addEventListener("click", (event) => {
  // prevent default action
  event.preventDefault();

  // close alert
  alertbox.parentElement.classList.add("d-none");
});
