// api key for open weather api
var apikey = "bf38229c443f86d1aebdddd765b527c1";

// initializing variables
var formEl = document.getElementById('form')
var searchInput = document.getElementById('Search_input');
var searchBtn = document.getElementById('search_button');
var currentCity = document.getElementById('current_city');
var currentTemp = document.getElementById('current_temperature');
var currentDate = document.getElementById('current_date');
var currentWind = document.getElementById('current_wind');
var currentHumidity = document.getElementById('current_humidity');
var weekDate = document.getElementById('week_date');
var weekTemp = document.getElementById('week_temp');
var weekHumidity = document.getElementById('week_humidity');
var weekWind = document.getElementById('week_wind');
var stored = [];

if (localStorage.getItem("past_city_searches")) {
    var past_city_searches = JSON.parse(localStorage.getItem('past_city_searches'));
} else {
    var past_city_searches = [];
}
// fuctions
function getSearch(event) {

    var currentDate = moment().format("M/D/YYYY");
    var coordsURL = https://api.openweathermap.org/data/3.0/weather?q=${searchInput.value}&appid={bf38229c443f86d1aebdddd765b527c1}
        console.log(coordsURL);
    fetch(coordsURL)
        .then(function (response) {
            return response.json();
        })
    .then(function (response) {
    return response.json();
})
    .then(function (localStorage) {
        console.log(localStorage);
    });