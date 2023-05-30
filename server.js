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
    const apiKey = '2dd3f3c89f824a17a30194720233005';
    const city = req.query.city; // Extract the city from the query parameters
    const date = req.query.date
    console.log('zip-code: ', city)
    // Make the API call to the weather API

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`);
    // Extract the relevant data from the API response
    console.dir(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&dt=${date}`)
    const weatherData = {
      location: response.data.location.name,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
    };
    console.log('results: ', response)
    // Send the weather data back to the front-end
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
