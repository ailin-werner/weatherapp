
// START - Time and date section

let currentDate = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[currentDate.getMonth()];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[currentDate.getDay()];

let date = currentDate.getDate();

let year = currentDate.getFullYear();

let hour = currentDate.getHours();

if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = currentDate.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

function currentTime() {
  let time = document.querySelector("#time");
  time.innerHTML = `${day} ${hour}:${minutes}`;
}
currentTime();

function actualDate() {
  let displayDate = document.querySelector("#date");
  displayDate.innerHTML = `${date} ${month} ${year}`;
}
actualDate();
// END - Time and date section

// START - Forcast days
let dayOne = days[currentDate.getDay() + 1];
let dayTwo = days[currentDate.getDay() + 2];
let dayThree = days[currentDate.getDay() + 3];
let dayFour = days[currentDate.getDay() + 4];
let dayFive = days[currentDate.getDay() + 5];
console.log(dayOne);
console.log(dayTwo);
console.log(dayThree);
console.log(dayFour);
console.log(dayFive);

// END - Forcast days

// START - Search engine and main temperature

function updateTemperature(response) {
  document.querySelector("#salutation").innerHTML = `Well hello there, ${response.data.name}!`
  // let input = document.querySelector("#searchbar");
  // let heading = document.querySelector("#salutation");
  // heading.innerHTML = `Well hello there, ${input.value}!`;

  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  // let temperature = Math.round(response.data.main.temp);
  // let currentTemperature = document.querySelector("#temperature");
  // currentTemperature.innerHTML = `${temperature}`;

  document.querySelector("#current-min").innerHTML = Math.round(response.data.main.temp_min);
  // let minimumTemp = Math.round(response.data.main.temp_min);
  // let minimumCurrentTemp = document.querySelector("#current-min");
  // minimumCurrentTemp.innerHTML = `${minimumTemp}`;

  document.querySelector("#current-max").innerHTML = Math.round(response.data.main.temp_max);
  // let maximumTemp = Math.round(response.data.main.temp_max);
  // let maximumCurrentTemp = document.querySelector("#current-max");
  // maximumCurrentTemp.innerHTML = `${maximumTemp}`;

  document.querySelector("#feels-like").innerHTML = Math.round(response.data.main.feels_like);
// let feelsLike = Math.round(response.data.main.feels_like);
//   let currentFeelsLike = document.querySelector("#feels-like");
//   currentFeelsLike.innerHTML = `${feelsLike}`;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  // let humidity = Math.round(response.data.main.humidity);
  // let currentHumidity = document.querySelector("#humidity");
  // currentHumidity.innerHTML = `${humidity}`;

  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  // let wind = Math.round(response.data.wind.speed);
  // let currentWind = document.querySelector("#wind");
  // currentWind.innerHTML = `${wind}`;
}

// function updateTemperatureForecast(response) {
//   let maxTempForecast = Math.round(response.data.main.list.temp.max);
//   let maximumForecastTemp = document.querySelector("#forecast-current-max");
//   maximumForecastTemp.innerHTML = `${maxTempForecast}`;
// }



function search(city) {
  let apiKey = "3e712c360eb3016685312bd97cac9b63";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(updateTemperature);
}

function updateCity(event) {
    event.preventDefault();
    let city = document.querySelector("#searchbar").value;
    
    search(city);
    // let apiUrlOtherdays = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=1&appid=${apiKey}&units=metric`;
    // axios.get(`${apiUrlOtherdays}`).then(updateTemperatureForecast);
}

let form = document.querySelector("#form-search");
form.addEventListener("submit", updateCity);

//END - Search engine and main temperature

// START - Weather API

function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "3e712c360eb3016685312bd97cac9b63";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(updateTemperature);
}
function searchLocation(event){
  event.preventDefault();
navigator.geolocation.getCurrentPosition(getLocation);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", searchLocation);


search("New York");

// END - Weather API

// START - Celcius / Farenheit degrees

function changeToFahrenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);


function changeToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 20;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToCelsius);

// END - Celcius / Farenheit degrees



