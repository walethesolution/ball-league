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
  const [nextSunday, setNextSunday] = useState<Date | null>(null);

  useEffect(() => {
    const calculateNextSunday = () => {
      const currentDate = new Date();
      const daysUntilNextSunday = 7 - currentDate.getDay();
      const nextSundayDate = new Date(
        currentDate.getTime() + daysUntilNextSunday * 24 * 60 * 60 * 1000
      );
      setNextSunday(nextSundayDate);
    };

    calculateNextSunday();
  }, []);

  useEffect(() => {
    if (nextSunday) {
      const fetchWeatherData = async () => {
        const apiKey = "26ef7bce18884dccb6e172107231707";
        const currentDate = new Date();
        const daysUntilNextSunday = 7 - currentDate.getDay();
        const nextSunday = new Date(
          currentDate.getTime() + daysUntilNextSunday * 24 * 24 * 60 * 1000
        );

        const formattedDate = `${nextSunday.getFullYear()} - ${(
          nextSunday.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")} - ${nextSunday
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=11207&dt=${formattedDate}`;

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
    }
  }, [nextSunday]);

  return (
    <div className="flex flex-col items-center justfify-center gap-6 bg-slate-100 rounded-xl py-3 w-[246px] mx-auto">
      <h1 className="font-semibold">Weather for Home Court:</h1>
      {nextSunday ? (
        <>
          <p className="font-medium text-lg">
            Date: {nextSunday.toLocaleDateString()}
          </p>
          {weatherData ? (
            <>
              <p className="font-normal text-3xl">
                {weatherData.current.temp_f}°F
              </p>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
                alt="The weather Icon"
                width={60}
                height={60}
              />
              <p className=" text-sm font-medium mx-4 text-center">
                {weatherData.current.condition.text}
              </p>
            </>
          ) : (
            <div>Loading Weather data ...</div>
          )}
        </>
      ) : (
        <div>Calculating upcoming game date ...</div>
      )}
    </div>
  );
};

export default Weather;
