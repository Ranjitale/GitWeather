const weatherLocal = document.querySelector(".weather-location");
const weatherTime = document.querySelector(".weather-time");
const weatherFahrenheit = document.querySelector(".weather-temp-f");
const weatherCelsuis = document.querySelector(".weather-temp-c");
const weatherSpeed = document.querySelector(".weather-speed");
const weatherHumidity = document.querySelector(".weather-humidity");
// fetch(
//   "https://api.weatherapi.com/v1/current.json?key=c4e2c0fd28944a97898154645232202&q=Kathmandu&aqi=no"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     weatherLocal.innerHTML = ` ${data.location.name}`;
//     weatherTime.innerHTML = `${data.location.localtime} `;
//     weatherFahrenheit.innerHTML = `${data.current.temp_f} &degF`;
//     weatherCelsuis.innerHTML = `${data.current.temp_c} &degC`;

//     weatherSpeed.innerHTML = `${data.current.wind_kph} kmph`;
//     weatherHumidity.innerHTML = `${data.current.humidity} %`;
//   })
//   .catch((error) => console.log(error));
const form = document.querySelector("form");
const cityInput = document.querySelector("#city-input");
const submitBtn = document.querySelector("#submit-btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const City = cityInput.value;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=c4e2c0fd28944a97898154645232202&q=${City}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weatherLocal.innerHTML = ` ${data.location.name}`;
      weatherTime.innerHTML = `${data.location.localtime} `;
      weatherFahrenheit.innerHTML = `${data.current.temp_f} &degF`;
      weatherCelsuis.innerHTML = `${data.current.temp_c} &degC`;

      weatherSpeed.innerHTML = `${data.current.wind_kph} kmph`;
      weatherHumidity.innerHTML = `${data.current.humidity} %`;
    })
    .catch((error) => console.log(error));
});
