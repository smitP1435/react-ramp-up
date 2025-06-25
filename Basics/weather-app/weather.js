
// const weatherInfo = fetchWeather(locationVal);
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getWeatherInfo() {
    const locationVal = document.getElementById('location').value;
    // document.getElementById('renderWeather').innerText = JSON.parse(weatherInfo);

    const result = await fetchWeather(locationVal);
    console.log(result)
    cityName.innerText = result.location.name;
    cityTime.innerText = result.current.last_updated;
    cityTemp.innerText = result.current.temp_c;
}


async function fetchWeather(locationVal) {
    const weatherInfo = await fetch(`http://api.weatherapi.com/v1/current.json?key=4cef9d080da14788bb2150928251806&q=${locationVal}&aqi=yes`)

    const result = await weatherInfo.json();
    console.log(result)
    return result;
}

fetchWeather('london')