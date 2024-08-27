document.getElementById('location-form').addEventListener('submit', getWeather);

async function getWeather(e) {
  e.preventDefault();
  
  const city = document.getElementById('location-input').value;
  const apiKey = "dc5d3f8926fb0c3207be4ebdc16f66dd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const weatherData = await fetch(url);

    // Check if the response is not OK
    if (!weatherData.ok) {
      const errorMessage = weatherData.status === 404 
      ? "Error: City not found" 
      : "Error: Failed to fetch weather data";
      throw new Error(errorMessage);
    }

    const json = await weatherData.json();
    displayWeather(json);

    document.getElementById('location-input').value = '';

  } catch (error) {
    document.getElementById('weather-data').textContent = error.message;
  }
}

// Display function to show the weather data (assumed implementation)
function displayWeather(data) {
  const weatherContainer = document.createElement('div');
  weatherContainer.id = 'weather-container';

  weatherContainer.innerHTML = `
    <h2>City: ${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;

  const weatherDataDiv = document.getElementById('weather-data');
  weatherDataDiv.innerHTML = ''; 
  weatherDataDiv.appendChild(weatherContainer);
}
