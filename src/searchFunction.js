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


import React, { useState } from 'react';
import axios from 'axios';

function SearchPartial() {
  let days = {}
  const [location, setLocation] = useState('');
  const [weatherResult, setResult] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  var timePart;
  

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
      const response = await axios.get('http://localhost:5000/weather', {
        params: {
          city: searchTerm,
          date: selectedDate
        }
      });

      // Process the response data
      days = response.data.forecastDay
      setLocation(response.data.location);
      setResult(response.data.forecastDay[0].hour)
      console.log('location',location)
      console.log('days: ', days)
      console.log(response.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
  <div>
    <div className="container mt-2 mb-2">
        <div id="weather-form row" className='searchBar'>
            <form onSubmit={handleSubmit}>
                <div className='col-lg-12 d-flex searchCol'>
                    <div className="form-group col-lg-6">
                        <label htmlFor="location-input">Location:</label>
                        <input type="text" className="form-control" id="location-input" onChange={handleInputChange}
                            placeholder="Enter location"></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label htmlFor="date-input">Date:</label>
                        <input type="date" className="form-control" id="date-input" onChange={handleDateChange}></input>
                    </div>
                    <div className="col-lg-2 d-flex flex-row-reverse searchCol">
                        <button type="submit" className="btn btn-danger searchButton"><i
                                className="fas fa-light fa-magnifying-glass-location fa-bounce"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  
      <div className="container mt-2 bg-none">
        <div className="card weekDisplayContainer">
          <h5 className="card-title text-center mt-4">Location: {location}</h5>
          <div className="card-body weekDisplayContainer">
            <div className="row justify-content-center">
              <div className="col-lg-2 align-middle scollButton">
                <button className="btn btn-danger" id="previous-week-btn">
                  <i className="fas fa-chevron-left"></i>
                </button>
                {weatherResult.length > 0 && (
                  <div className="row">
                    {weatherResult.map((hour, index) => (
                      <div key={hour.time} className="col-lg-2 d-flex">
                       
                        <div className="">
                          <div className="weather-box text-center">
                            {split(hour.time)}
                            <h6>{timePart}</h6>
                            <img src={hour.condition.icon} alt={hour.condition.text} />
                            <p>{hour.temp_c}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {Array.from({ length: Math.ceil(weatherResult.length / 6) }, (_, i) => (
                      <div key={i} className="w-100"></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

function split(a){
  var dateTimeParts = a.split(' ');
  var timePart = dateTimeParts[1];

  return timePart;

}


export default SearchPartial;
