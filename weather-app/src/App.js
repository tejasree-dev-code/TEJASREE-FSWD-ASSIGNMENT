import { useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "process.env.API_KEY";

  const fetchWeather = async () => {
    if (!input) {
      setError("Please enter a city");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setWeather(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {/* States */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Result */}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity:{weather.main.humidity}%</p>
          <p>Wind:{weather.wind.speed}m/s</p>
          <p>pressure: {weather.main.pressure}hPa</p>
        </div>
      )}
    </div>
  );
}
