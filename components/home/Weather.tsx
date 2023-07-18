"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface WeatherData {
  current: {
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "26ef7bce18884dccb6e172107231707";
      const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=11207`;

      const response = await fetch(apiUrl);

      try {
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error("Error", response.status, response.statusText);
          setWeatherData(null);
        }
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 bg-slate-100 rounded-xl py-3">
      <h1 className="font-semibold">Weather for Home Court:</h1>
      {weatherData ? (
        <>
          <p className="font-normal text-3xl">{weatherData.current.temp_f}°F</p>
          <Image
            src={`https:${weatherData.current.condition.icon}`}
            alt="The weather Icon"
            width={60}
            height={60}
          />
          <p className="font-medium">
            Conditions: {weatherData.current.condition.text}
          </p>
        </>
      ) : (
        <div>Loading Weather data ...</div>
      )}
    </div>
  );
};

export default Weather;
