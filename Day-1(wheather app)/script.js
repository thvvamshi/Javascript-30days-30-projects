const apikey = "138615660b36569ea351fba717858f87";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".wheather img");
const whethermain = document.querySelector(".whethermain");


async function checkwheather(city){
    const response = await fetch( apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"; 
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main=="Clouds"){
        wheaterIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
    }else if(data.weather[0].main=="Clear"){
        wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png"
    }else if(data.weather[0].main=="Rain"){
        wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png"
    }else if(data.weather[0].main=="Drizzle"){
        wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png"
    }else if(data.weather[0].main=="Mist"){
        wheaterIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png"
    }

    whethermain.style.display ="block"
    document.querySelector(".error").style.display = "none"; 
};
    }
    
    

searchBtn.addEventListener("click",()=>{
    checkwheather(searchBox.value);
});