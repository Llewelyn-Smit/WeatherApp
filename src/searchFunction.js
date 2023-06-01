// function searchPartial() {

//   return (

//     <div className="container mt-2 mb-2">

//     <div id="weather-form row" className='searchBar'>

//       <form>

//         <div className='col-lg-12 d-flex searchCol'>

//           <div className="form-group col-lg-6">

//             <label htmlFor="location-input">Location:</label>

//             <input type="text" className="form-control" id="location-input" placeholder="Enter location"></input>

//           </div>

//           <div className="form-group col-lg-4">

//             <label htmlFor="date-input">Date:</label>

//             <input type="date" className="form-control" id="date-input"></input>

//           </div>

//           <div className="col-lg-2 d-flex flex-row-reverse searchCol">

//           <button type="submit" className="btn btn-danger searchButton"><i className="fas fa-light fa-magnifying-glass-location fa-bounce"></i></button>

//           </div>

//         </div>

//       </form>

//   </div>

// </div>

//   );

// }

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
    // Generate the HTML using the data
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
     {renderDayFunctionHTML()}
     
    </div>
  );
}


export default SearchPartial;


