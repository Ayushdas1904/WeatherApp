import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import Container from './container.jsx';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const checkWeather = async (city) => {
        try {
            const apiKey = "6716f05fd110c92b83f483a45216cdcd"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const response = await fetch(url);

            if (!response.ok) { 
                if (response.status === 404) {
                    setError('SORRY, LOCATION NOT FOUND!');
                } else {
                    setError('Failed to fetch weather data');
                }
                setWeatherData(null);
                return;
            }

            const weather_data = await response.json();
            setWeatherData(weather_data);
            setError('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An error occurred while fetching data.');
            setWeatherData(null);
        }
    };

    return (
        <>
            <Navbar checkWeather={checkWeather} />
            <Container weatherData={weatherData} error={error} />
        </>
    );
}

export default App;
