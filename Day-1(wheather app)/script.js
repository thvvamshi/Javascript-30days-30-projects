// Define the API key for OpenWeatherMap
const apikey = "138615660b36569ea351fba717858f87";

// Define the base URL for the weather API, including the units as metric (Celsius)
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".wheather img");
const whethermain = document.querySelector(".whethermain");

// Define an asynchronous function to check the weather for a given city
async function checkwheather(city) {
    // Make a fetch request to the OpenWeatherMap API, combining the city and the API key
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    // Check if the response status is 404, meaning the city wasn't found
    if (response.status == 404) {
        // Display an error message if the city is not found
        document.querySelector(".error").style.display = "block"; 
    } else {
        // If the city is found, parse the JSON data from the response
        var data = await response.json();

        // Update the city name in the HTML with the fetched data
        document.querySelector(".city").innerHTML = data.name;

        // Update the temperature in the HTML with the fetched data (rounding to nearest whole number)
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        // Update the humidity percentage in the HTML with the fetched data
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

        // Update the wind speed in the HTML with the fetched data (in km/h)
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        // Check the weather condition and update the weather icon accordingly
        if (data.weather[0].main == "Clouds") {
            // If the weather is cloudy, set the icon to a cloud image
            wheaterIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png";
        } else if (data.weather[0].main == "Clear") {
            // If the weather is clear, set the icon to a sun image
            wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png";
        } else if (data.weather[0].main == "Rain") {
            // If the weather is rainy, set the icon to a rain image
            wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png";
        } else if (data.weather[0].main == "Drizzle") {
            // If the weather is drizzle, set the icon to a drizzle image
            wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png";
        } else if (data.weather[0].main == "Mist") {
            // If the weather is misty, set the icon to a mist image
            wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png";
        }

        // Make the weather details section visible on the webpage
        whethermain.style.display = "block";

        // Hide the error message if data was successfully fetched
        document.querySelector(".error").style.display = "none"; 
    }
}

// Add an event listener to the search button
searchBtn.addEventListener("click", () => {
    // Call the checkwheather function with the value entered in the search box when the button is clicked
    checkwheather(searchBox.value);
});
