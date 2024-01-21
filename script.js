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
var weekTemp = document.getElementById('week_temp');
var weekHumidity = document.getElementById('week_humidity');
var weekWind = document.getElementById('week_wind');
var stored = [];

if (localStorage.getItem("pastCitySearches")) {
    var pastCitySearches = JSON.parse(localStorage.getItem('pastCitySearches'));
} else {
    var pastCitySearches = [];
}
// fuctions
function getSearch(event) {

    var currentDate = moment().format("M/D/YYYY");
    var coordsURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apikey}`
        ;
    console.log(coordsURL);
    fetch(coordsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (locData) {
            console.log(locData);
            var cityLat = locData.coord.lat;
            var cityLon = locData.coord.lon;
            var part = "minutely, hourly, alerts";
            var urlQuery = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apikey}"
        });
    fetch(urlQuery)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var iconWeather = locData.weather[0].icon;
            var iURL = "http://openweathermap.org/img/w/" + iconWeather + ".png";
            $('#weather-icon').attr('src', iURL);

            currentCity.textContent = locData.name + " (" + currentDate + ")";
            currentTemp.textContent = "Temp: " + (((parseInt(locData.main.temp) - 273.15) * 1.80) + 32).toFixed(2)
                + "°F";
            currentWind.textContent = "Wind: " + data.current.wind_speed + "MPH";
            currentHumidity.textContent = "Humidity: " + data.current.humidity + "%";

            var pastCity = locData.name;
            pastCitySearches.push(pastCity)
            localStorage.setItem("pastCitySearches", JSON.stringify(pastCitySearches));


            for (var i = 0; i < 5; i++) {
                var minTemp = data.daily[i].temp.min;
                var maxTemp = data.daily[i].temp.max;
                var dayHumidity = data.daily[i].humidity;
                var dayWind = data.daily[i].wind_speed;
                var dayDate = moment().add(i + 1, "days").format("M/D/YYYY");
                var iconCode = data.daily[i].weather[0].icon;
                var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

                $('#img' + i).attr('src', iconURL);

                document.getElementById('week_date' + i).textContent = dayDate;
                document.getElementById('week_tempMax' + i).textContent = "Max Temp: " + (((parseInt(maxTemp) - 273.15) * 1.80) + 32).toFixed(2) + "°F";
                document.getElementById('week_tempMin' + i).textContent = "Min Temp: " + (((parseInt(minTemp) - 273.15) * 1.80) + 32).toFixed(2) + "°F";
                document.getElementById('week_wind' + i).textContent = "wind: " + dayWind + "MPH";
                document.getElementById('week_humidity' + i).textContent = "Humidity: " + dayHumidity + "%";

            }
        })


};

function renderPastSearch() {
    var stored = JSON.parse(localStorage.getItem("pastCitySearches"));
    console.log("PAST", stored);
    document.getElementById("Past_City").innerHTML = '';

    for (var i = 0; i < stored.length; i++) {
        var pastSearchE1 = document.createElement('input');
        pastSearchE1.setAttribute('type', 'text');
        pastSearchE1.setAttribute('readonly', true);
        pastSearchE1.setAttribute('class',);
        pastSearchE1.setAttribute('value', stored[i]);
        pastSearchE1.addEventListener('click', function () {
            getSearch(pastCitySearches.value);
        });
        document.getElementById("Past_City").append(pastSearchE1);
    };
}
// event listeners
$("#search_button").on("click", getSearch);