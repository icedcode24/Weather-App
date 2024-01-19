// api key for open weather api
var apikey = "bf38229c443f86d1aebdddd765b527c1";

// initializing variables
var searchInput = document.getElementById('Search_input');
var searchBtn = document.getElementById('search_button');
var currentCity = document.getElementById('current_city');
var currentTemp = document.getElementById('current_temperature');
var currentDate = document.getElementById('current_date');
var currentWind = document.getElementById('current_wind');
var currentHumidity = document.getElementById('current_humidity');
var weekDate = document.getElementById('week_date');
var weekTemp= document.getElementById('week_temp');
var weekHumidity = document.getElementById('week_humidity');
var weekWind = document.getElementById('week_wind');
var stored = [];
// fuctions
fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });