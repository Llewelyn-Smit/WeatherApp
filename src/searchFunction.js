
import React, { useState } from "react";

import axios from "axios";
import dayFunction from './dayFunction';
function SearchPartial() {
  let days = {};

  const [location, setLocation] = useState("");

  const [weatherResult, setResult] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const [tempStandard, setTempStandard] = useState(0);


  const renderDayFunctionHTML = () => {
    return dayFunction(weatherResult, location, tempStandard);
  };

  const handleStandardChange = (event) => {
    setTempStandard(event.target.selectedIndex);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make your API request using Axios

    try {
      const response = await axios.get("http://localhost:5000/weather", {
        params: {
          city: searchTerm,

          date: selectedDate,
        },
      });

      // Process the response data

      days = response.data.forecastDay;

      setLocation(response.data.location);

      setResult(response.data.forecastDay[0].hour);

      console.log("location", location);

      console.log("days: ", days);

      console.log(response.data);
    } catch (error) {
      // Handle any errors

      console.error(error);
    }
  };

  return (
    <div>
      <div className="container mt-2 mb-2 searchContain">
        <div id="weather-form" className="row searchBar">
          <form
            onSubmit={handleSubmit}
            className="col-lg-12 d-flex flex-column flex-lg-row searchCol"
          >
            <div className="form-group col-lg-4">
              <label className="w-100 text-center" htmlFor="location-input">
                Location
              </label>

              <input
              required
                type="text"
                className="form-control text-center"
                id="location-input"
                onChange={handleInputChange}
                placeholder="Enter location"
              ></input>
            </div>

            <div className="form-group col-lg-4">
              <label className="w-100 text-center" htmlFor="date-input">
                Date
              </label>

              <input
              required
                type="date"
                className="form-control text-center"
                id="date-input"
                onChange={handleDateChange}
              ></input>
            </div>

            <div className="form-group col-lg-3">
              <label className="w-100 text-center" htmlFor="standard-input">
                Standard
              </label>

              <select
              required
                className="form-control text-center"
                id="standard-input"
                onChange={handleStandardChange}
              >
                <option value="celsius">Celsius</option>

                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </div>

            <div className="d-flex justify-content-center col-lg-1">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-danger searchButton  rounded-4 w-100"
              >
                <i className="fas fa-light fa-magnifying-glass-location fa-bounce"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {weatherResult.length > 0 && (
        renderDayFunctionHTML()
     )}

    </div>
  );
}


export default SearchPartial;


