import React from "react";

function WeatherDetails() {
    const weather = JSON.parse(
        localStorage.getItem("weatherData")
    );

    if (!weather) {
        return <h2>No Weather Data Found</h2>;
    }

    return (
        <div
            style={{
                textAlign: "center",
                paddingTop: "50px"
            }}
        >
            <h1>{weather.name}</h1>

            <h2>Weather Details</h2>

            <p>Temperature: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Condition: {weather.weather[0].main}</p>
            <p>Feels Like: {weather.main.feels_like} °C</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherDetails;
