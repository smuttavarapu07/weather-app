import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import "./App.css";

function WeatherHome() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const searchWeather = async () => {
        const apiKey = "ca3999f61476542510dc9bced6f753e1";

        const response = await fetch(
            //your weather app URL{city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();
        setWeather(data);
    };

    const openDetailsInNewTab = () => {
        localStorage.setItem("weatherData", JSON.stringify(weather));

        window.open(
            `${window.location.origin}/details`,
            "_blank"
        );
    };

    return (
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <h1>Weather App</h1>

            <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={searchWeather}>Search</button>

            {weather && weather.main && (
                <div>
                    <h2
                        style={{
                            color: "blue",
                            cursor: "pointer",
                            textDecoration: "underline"
                        }}
                        onClick={openDetailsInNewTab}
                    >
                        {weather.name}
                    </h2>

                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Condition: {weather.weather[0].main}</p>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WeatherHome />} />
                <Route path="/details" element={<WeatherDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
