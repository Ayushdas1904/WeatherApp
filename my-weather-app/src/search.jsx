import React, { useState, useEffect } from 'react'

function Search() {
    const [search, setSearch] = useState('');

    const temperature = document.querySelector(".temperature")
    const feelsLike = document.querySelector(".feelsLike")
    const description = document.querySelector(".description");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".wind-speed");
    const weatherVid = document.getElementById("myVideo")
    const location_not_found = document.querySelector(".location-not-found")
    const error = document.getElementById("error")



    async function checkWeather(city) {
        const apiKey = "6716f05fd110c92b83f483a45216cdcd"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const weather_data = await fetch(`${url}`).then(response => response.json());

        if (weather_data.cod === `404`) {
            // location_not_found.style.display = "flex";
            // weather_body.style.display = "none";
            location_not_found.innerHTML = `SORRY, LOCATION NOT FOUND!`
            error.src = "./src/assets/error-404.png"
            console.log("error");
            return;
        }

        console.log("run");
        // location_not_found.style.display = "none";
        // weather_body.style.display = "flex";

        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        feelsLike.innerHTML = `Feels Like ${Math.round(weather_data.main.feels_like - 273.15)}°C`
        description.innerHTML = `Description: ${weather_data.weather[0].description}`;
        humidity.innerHTML = `Humidity ${weather_data.main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed ${weather_data.wind.speed}Km/H`;


        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weatherVid.src = "./src/assets/clouds.webm";
                break;
            case 'Clear':
                weatherVid.src = "./src/assets/sunny.webm";
                break;
            case 'Rain':
                weatherVid.src = "./src/assets/rain.webm";
                break;
            case 'Mist':
                weatherVid.src = "./src/assets/mist.webm";
                break;
            case 'Snow':
                weatherVid.src = "./src/assets/snow.webm";
                break;
            default:
                weatherVid.src = "./src/assets/sunny.webm"
                break;

        }

        console.log(weather_data);
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData.target.value);
        // onSearchChange(searchData.target.value)
    }
    const handleSubmit = () => {
        // console.log("Input value:", search)
        checkWeather(search)
        setSearch('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Do something with the input value
            // console.log('Input Value on Enter:', search);
            checkWeather(search)
            setSearch('');
        }
    };

    return (
        <>
            <div>
                <input
                    className='search-bar'
                    type="text"
                    placeholder='Search for location'
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={handleOnChange}
                />
                <button onClick={handleSubmit} className='search-button' ><img className='search' src="./src/assets/search.png" alt="" /></button>
            </div>
        </>
    )
}

export default Search