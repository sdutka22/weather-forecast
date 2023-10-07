const API_URL = "https://api.open-meteo.com/v1/forecast";
const LATITUDE = 52.52;
const LONGITUDE = 13.41;
const TIMEZONE = encodeURIComponent("Europe/Berlin");

const getWeatherData = async (startDate, endDate) => {
  const hourlyVariables = [
    "temperature_2m",
    "precipitation_probability",
    "precipitation",
    "surface_pressure",
    "cloudcover",
  ];

  const dailyVariables = [
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "sunset",
    "uv_index_max",
    "rain_sum", 
    "showers_sum",
    "windspeed_10m_max",
  ];

  const hourlyQuery = hourlyVariables.join(",");
  const dailyQuery = dailyVariables.join(",");

  const apiUrl = `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=${hourlyQuery}&daily=${dailyQuery}&timezone=${TIMEZONE}&forecast_days=16`; 

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default getWeatherData;
