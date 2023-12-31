function formatDate(today) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[today.getDay()];
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let displayDay = `${day} ${hours}:${minutes}`;
  return displayDay;
}

function searchCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector(".search-bar");
  let newCity = document.querySelector("#city-name");
  newCity.innerHTML = changeCity.value;

  changeTemp(changeCity.value);
}

function changeTemp(cityInput) {
  let city = cityInput;
  let apiKey = "o0dcab20a49t4ddfcbc102a01c83f7a7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function displayTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let showTemp = document.querySelector(".temp");

  showTemp.innerHTML = temp;
}

let origCity = document.querySelector("#city-name");
changeTemp(origCity.textContent);

let today = new Date();
let currentTimeDay = formatDate(today);
let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = currentTimeDay;

let searchBox = document.querySelector("#input-search");
searchBox.addEventListener("submit", searchCity);
