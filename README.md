# Weather App

This Weather App allows users to fetch and display weather information for a given city. It uses the OpenWeatherMap API to retrieve weather data in real-time.

## Project Structure

- **index.html:** Contains the structure of the webpage, including the form for user input and the container for displaying weather data.
- **script.js:** Contains the JavaScript code for fetching weather data from the API and displaying it on the webpage.
- **styles.css:** Contains the CSS styles for the webpage, including layout and design.

## Steps to Create the Weather App

1. **Set up the HTML structure:**
   - Created a basic HTML structure in `index.html`.
   - Added a form to take user input (city name) and a button to trigger the weather fetch.
   - Added a container to display the fetched weather data.

2. **Style the webpage:**
   - Applied a background gradient to the body.
   - Styled the title, input form, button, and weather data display using CSS in `styles.css`.

3. **Implement weather data fetching:**
   - Added an event listener to the form in `script.js` that triggers a function to fetch weather data from the OpenWeatherMap API when the form is submitted.
   - Used the Fetch API to get the weather data asynchronously.
   - Checked for errors during the API call, such as a city not being found or other issues with fetching data.

4. **Display the fetched weather data:**
   - Implemented a function to dynamically create and display weather information on the webpage, including city name, temperature, weather description, and humidity.
   - Cleared any previous weather data before displaying new data.

5. **Handle errors gracefully:**
   - Displayed appropriate error messages on the webpage if the API call fails (e.g., city not found).
