// const express = require('express'); //Line 1
// const app = express(); //Line 2
// const port = process.env.PORT || 5000; //Line 3

// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

app.get('/weather', async (req, res) => {
  try {
    const zipcity = req.query.city;
    const geodate = req.query.date;
    const GEO_KEY = "8bd57e7c8b4c47a7d74835a2f88ae461";

    const geoResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${zipcity},za&appid=${GEO_KEY}&date=${geodate}`
    );
    const geoData = {
      country: geoResponse.data.sys.country,
      name: geoResponse.data.name,
    };

    const apiKey = '2dd3f3c89f824a17a30194720233005';
    let city = geoData.name; // Extract the city from the geo API response
    const date = req.query.date;

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`);

      const weatherData = {
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        forecastDay: response.data.forecast.forecastday
      };

      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  } catch (error) {
    console.error(error);

    const apiKey = '2dd3f3c89f824a17a30194720233005';
    const city = req.query.city; // Use the city from the query parameters if geo API fails
    const date = req.query.date;

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`);

      const weatherData = {
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
        condition: response.data.current.condition.text,
        forecastDay: response.data.forecast.forecastday
      };

      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
