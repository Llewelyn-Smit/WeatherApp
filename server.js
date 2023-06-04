const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

// Define a route for handling GET requests to '/weather'
app.get('/weather', async (req, res) => {
  try {
    // Extract the city and date query parameters from the request
    const zipcity = req.query.city;
    const geodate = req.query.date;

    const GEO_KEY = "8bd57e7c8b4c47a7d74835a2f88ae461";

    // Send a GET request to the geolocation API to fetch geo data
    const geoResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${zipcity},za&appid=${GEO_KEY}&date=${geodate}`
    );

    // Extract relevant data from the geolocation API response
    const geoData = {
      country: geoResponse.data.sys.country,
      name: geoResponse.data.name,
    };

    const apiKey = '2dd3f3c89f824a17a30194720233005';

    // Extract the city and date for weather data from the geoData object
    let city = geoData.name;
    const date = req.query.date;

    try {
      // Send a GET request to the weather API to fetch weather data
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`);

      // Extract relevant data from the weather API response
      const weatherData = {
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        forecastDay: response.data.forecast.forecastday
      };

      // Send the weather data as a JSON response
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  } catch (error) {
    console.error(error);

    const apiKey = '2dd3f3c89f824a17a30194720233005';

    // If the geolocation API fails, use the city from the query parameters
    const city = req.query.city;
    const date = req.query.date;

    try {
      // Send a GET request to the weather API to fetch weather data
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`);

      // Extract relevant data from the weather API response
      const weatherData = {
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        forecastDay: response.data.forecast.forecastday
      };

      // Send the weather data as a JSON response
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
