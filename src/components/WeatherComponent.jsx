import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

const WeatherComponent = () => {
  const API_URL = 'https://api.open-meteo.com/v1/forecast';
  const [dailyData, setDailyData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const latitude = 52.52;
  const longitude = 13.41;
  const timezone = encodeURIComponent('Europe/Berlin');

  const getWeatherData = async () => {
    const hourlyVariables = [
      'temperature_2m',
      'precipitation_probability',
      'precipitation',
      'surface_pressure',
      'cloudcover',
    ];

    const dailyVariables = [
      'precipitation_probability_max',
      'temperature_2m_max',
      'temperature_2m_min',
      'sunrise',
      'sunset',
      'uv_index_max',
      'rain_sum',
      'showers_sum',
      'windspeed_10m_max',
    ];

    const hourlyQuery = hourlyVariables.join(',');
    const dailyQuery = dailyVariables.join(',');

    const apiUrl = `${API_URL}?latitude=${latitude}&longitude=${longitude}&hourly=${hourlyQuery}&daily=${dailyQuery}&timezone=${timezone}&forecast_days=16`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setDailyData(data.daily);
      setHourlyData(data.hourly);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const getDailyData = (dailyData, targetDate) => {
    const currentDate = targetDate;
    const todayIndex = dailyData && dailyData.time.findIndex((date) => {
      const forecastDate = new Date(date);
      return forecastDate.getDate() === currentDate.getDate() &&
             forecastDate.getMonth() === currentDate.getMonth();
    });

    return {
      precipitation_probability_max: dailyData && dailyData.precipitation_probability_max[todayIndex],
      temperature2mMax: dailyData && dailyData.temperature_2m_max[todayIndex],
      temperature2mMin: dailyData && dailyData.temperature_2m_min[todayIndex],
      sunrise: dailyData && dailyData.sunrise[todayIndex],
      sunset: dailyData && dailyData.sunset[todayIndex],
      uvIndexMax: dailyData && dailyData.uv_index_max[todayIndex],
      rainSum: dailyData && dailyData.rain_sum[todayIndex],
      showersSum: dailyData && dailyData.showers_sum[todayIndex],
      windspeed10mMax: dailyData && dailyData.windspeed_10m_max[todayIndex],
    };
  };

  const getHourlyData = (hourlyData, targetDate) => {
    if (!hourlyData || !hourlyData.time || !targetDate) {
      console.error('Invalid hourly data format or target date');
      return [];
    }
  
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.getMonth();
  
    const hourlyDataForTargetDay = [];
  
    for (let i = 0; i < hourlyData.time.length; i++) {
      const forecastDate = parseISO(hourlyData.time[i]);
      const forecastDay = forecastDate.getDate();
      const forecastMonth = forecastDate.getMonth();
  
      if (forecastDay === targetDay && forecastMonth === targetMonth) {
        hourlyDataForTargetDay.push({
          temperature2m: hourlyData.temperature_2m[i],
          precipitationProbability: hourlyData.precipitation_probability[i],
          precipitation: hourlyData.precipitation[i],
          surfacePressure: hourlyData.surface_pressure[i],
          cloudcover: hourlyData.cloudcover[i],
          formattedTime: format(forecastDate, 'yyyy-MM-dd HH:mm'),
        });
      }
    }
  
    return hourlyDataForTargetDay;
  };

  const getHourlyDataByDate = (targetDate) => {
    return getHourlyData(hourlyData, targetDate);
  }; 

  const getDailyDataByDate = (targetDate) => {
    return getDailyData(dailyData, targetDate);
  }; 

  const TodayWeatherdata = getDailyData(dailyData, new Date());

  useEffect(() => {
    getWeatherData();
  }, []);

  return {
    weatherData,
    getDailyDataByDate,
    TodayWeatherdata,
    getHourlyDataByDate
  }
};

export default WeatherComponent;
  