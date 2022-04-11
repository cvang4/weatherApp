let weather = {
    apiKey: "66e8fecf3bdedcb715506ac6e92db93c",

    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    fetchWeatherZip: function(zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    // "&exclude=minutelyhourlyalerts&units=imperial&appid="
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {temp_max} = data.main;
        const {temp_min} = data.main;
        // const {timezone} = data.timezone;
        console.log(name, icon, description, temp, humidity, speed, temp_max, temp_min);
        document.querySelector(".city").innerText = name;
        // document.querySelector(".date").innerText = timezone;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".hi").innerText = "H: " + temp_max + " °F" + "/";
        document.querySelector(".low").innerText =  " L: " + temp_min + " °F";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    searchZip: function () {
        this.fetchWeatherZip(document.querySelector(".search-zip").value);
    }
};

//search for city or zip on click
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    weather.searchZip();
});

//search by zip when hitting enter
document.querySelector(".search-zip").addEventListener("keyup", function(){
    if (event.key == "Enter"){
        weather.searchZip();
    }
})

//search by city when hitting enter
document.querySelector(".search-bar").addEventListener("keyup", function(){
    if (event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Troy");

let currentDate = new Date()
document.querySelector(".date").innerText = currentDate;


