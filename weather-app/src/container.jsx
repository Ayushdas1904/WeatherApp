import React from 'react';

function Container({ weatherData, error }) {
    if (error) {
        return (
            <div className="location_not_found">
                <img id='errorImg' src="./src/assets/error-404.png" alt="Error" />
                <p>{error}</p>
            </div>
        );
    }

    if (!weatherData) {
        return null; // Or a loading indicator
    }

    const getWeatherImage = (weather) => {
        switch (weather) {
            case 'Clouds':
                return './src/assets/clouds.png';
            case 'Clear':
                return './src/assets/clear.png';
            case 'Rain':
                return './src/assets/rain.png';
            case 'Mist':
            case 'Haze':
                return './src/assets/mist.png';
            case 'Snow':
                return './src/assets/snow.png';
            default:
                return './src/assets/sunny.png';
        }
    };

    return (
        <div className="container">
            <div className="forecast">
                <div className="tempHead">
                    <img 
                        width="100px"
                        id='myImg'
                        src={getWeatherImage(weatherData.weather[0].main)}
                        alt="Weather"
                    />
                    <h1 style={{ fontSize: '80px' }} className="temperature">
                        {Math.round(weatherData.main.temp - 273.15)}°C
                    </h1>
                </div>

                <div className="weatherDetail">
                    <div className="feelsLike">Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C</div>
                    <div className="description">Description: {weatherData.weather[0].description}</div>
                    <div className="humidity">Humidity: {weatherData.main.humidity}%</div>
                    <div className="wind-speed">Wind Speed: {weatherData.wind.speed} Km/H</div>
                    <div className="visibility">Visibility: {weatherData.visibility / 1000.0} Km</div>
                </div>
            </div>
        </div>
    );
}

export default Container;
