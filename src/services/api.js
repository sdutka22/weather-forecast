const API_URL = "https://api.open-meteo.com/v1/forecast";
const LATITUDE = 50.0614;
const LONGITUDE = 19.9366;
const TIMEZONE = encodeURIComponent("Europe/Berlin");
const getWeatherData = async (startDate, endDate) => {
    const hourlyVariables = [
      "temperature_2m",
      "relativehumidity_2m",
      "rain",
      "snowfall",
      "visibility",
      "windspeed_10m",
    ];
  
    const dailyVariables = [
      "weathercode",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "uv_index_clear_sky_max",
      
    ];
  
    const hourlyQuery = hourlyVariables.join(",");
    const dailyQuery = dailyVariables.join(",");
  
    const apiUrl = `${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=${hourlyQuery}&daily=${dailyQuery}&timezone=${TIMEZONE}&start_date=${startDate}&end_date=${endDate}`;
  
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
