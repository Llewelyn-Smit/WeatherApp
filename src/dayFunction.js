
//Deprecated in current build
import React, { useState, useEffect } from 'react';
function DayPartial({ dayData }) {
  const [dayD, setDayD] = useState({"location":"Paris","temperature":14,"condition":"Sunny","forecastDay":[{"date":"2023-05-30","day":{"maxtemp_c":22.2,"mintemp_c":11.2,"avgtemp_c":16.9,"maxwind_kph":22,"totalprecip_mm":0,"totalsnow_cm":0,"avghumidity":59,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000}},"astro":{},"hour":[{"time":"2023-05-30 00:00","temp_c":14.4,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_kph":17.6,"precip_mm":0,"humidity":61,"cloud":27,"heatindex_c":14.4,"heatindex_f":57.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.2},{"time":"2023-05-30 01:00","temp_c":13.7,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":17.3,"precip_mm":0,"humidity":62,"cloud":10,"heatindex_c":13.7,"heatindex_f":56.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.2},{"time":"2023-05-30 02:00","temp_c":13.1,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":17.3,"precip_mm":0,"humidity":64,"cloud":5,"heatindex_c":13.1,"heatindex_f":55.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.2},{"time":"2023-05-30 03:00","temp_c":12.5,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":16.9,"precip_mm":0,"humidity":67,"cloud":7,"heatindex_c":12.5,"heatindex_f":54.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.5},{"time":"2023-05-30 04:00","temp_c":11.7,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":16.9,"precip_mm":0,"humidity":72,"cloud":8,"heatindex_c":11.7,"heatindex_f":53.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.5},{"time":"2023-05-30 05:00","temp_c":11.2,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":16.9,"precip_mm":0,"humidity":74,"cloud":7,"heatindex_c":11.2,"heatindex_f":52.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.5},{"time":"2023-05-30 06:00","temp_c":11.4,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":16.6,"precip_mm":0,"humidity":73,"cloud":7,"heatindex_c":11.4,"heatindex_f":52.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":22.7},{"time":"2023-05-30 07:00","temp_c":12.6,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":18,"precip_mm":0,"humidity":70,"cloud":7,"heatindex_c":12.6,"heatindex_f":54.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":21.6},{"time":"2023-05-30 08:00","temp_c":14.3,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":18.7,"precip_mm":0,"humidity":65,"cloud":6,"heatindex_c":14.3,"heatindex_f":57.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":21.6},{"time":"2023-05-30 09:00","temp_c":16.2,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":18.7,"precip_mm":0,"humidity":59,"cloud":5,"heatindex_c":16.2,"heatindex_f":61.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":21.6},{"time":"2023-05-30 10:00","temp_c":18.1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":19.1,"precip_mm":0,"humidity":55,"cloud":5,"heatindex_c":18.1,"heatindex_f":64.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":22},{"time":"2023-05-30 11:00","temp_c":20,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":19.8,"precip_mm":0,"humidity":52,"cloud":5,"heatindex_c":20,"heatindex_f":68,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":22.7},{"time":"2023-05-30 12:00","temp_c":21,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":20.5,"precip_mm":0,"humidity":50,"cloud":10,"heatindex_c":21,"heatindex_f":69.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":23.8},{"time":"2023-05-30 13:00","temp_c":21.8,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":21.2,"precip_mm":0,"humidity":47,"cloud":7,"heatindex_c":24.3,"heatindex_f":75.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.5},{"time":"2023-05-30 14:00","temp_c":22.1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":21.6,"precip_mm":0,"humidity":43,"cloud":8,"heatindex_c":24.2,"heatindex_f":75.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.8},{"time":"2023-05-30 15:00","temp_c":22.2,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":21.6,"precip_mm":0,"humidity":40,"cloud":7,"heatindex_c":24.1,"heatindex_f":75.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.8},{"time":"2023-05-30 16:00","temp_c":22.2,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":22,"precip_mm":0,"humidity":41,"cloud":3,"heatindex_c":24.1,"heatindex_f":75.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.2},{"time":"2023-05-30 17:00","temp_c":21.9,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":21.6,"precip_mm":0,"humidity":44,"cloud":2,"heatindex_c":24.2,"heatindex_f":75.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.8},{"time":"2023-05-30 18:00","temp_c":20.6,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":21.2,"precip_mm":0,"humidity":49,"cloud":18,"heatindex_c":20.6,"heatindex_f":69.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":24.5},{"time":"2023-05-30 19:00","temp_c":19.7,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":19.4,"precip_mm":0,"humidity":54,"cloud":17,"heatindex_c":19.7,"heatindex_f":67.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":22.3},{"time":"2023-05-30 20:00","temp_c":17.6,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":18.4,"precip_mm":0,"humidity":61,"cloud":2,"heatindex_c":17.6,"heatindex_f":63.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.9},{"time":"2023-05-30 21:00","temp_c":16.4,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_kph":18,"precip_mm":0,"humidity":65,"cloud":2,"heatindex_c":16.4,"heatindex_f":61.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":26.6},{"time":"2023-05-30 22:00","temp_c":15.7,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":17.6,"precip_mm":0,"humidity":67,"cloud":2,"heatindex_c":15.7,"heatindex_f":60.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":26.6},{"time":"2023-05-30 23:00","temp_c":15.1,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_kph":17.3,"precip_mm":0,"humidity":71,"cloud":3,"heatindex_c":15.1,"heatindex_f":59.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"gust_kph":25.6}]}]});
  useEffect(() => {
    // This effect will be triggered whenever the dayData prop changes
    // You can update the local state with the new data received from the SearchPartial component
    // Assuming the dayData prop is an array of objects with 'day' and 'temperature' properties
    setDayD(dayData);
  }, [dayData]);
  return (
    <div className="container mt-2 bg-none">
      <div className="card weekDisplayContainer">
      {console.log(dayD)}
      <h5 className="card-title text-center mt-4">location : {dayD.location}</h5>
        <div className="card-body weekDisplayContainer">
          <div className="row justify-content-center">
            <div className="col-lg-2 align-middle scollButton">
              <button className="btn btn-danger" id="previous-week-btn">
                  <i className="fas fa-chevron-left"></i>
                </button>
            </div>
            <div className='col-lg-8 d-flex'>
                <div className=''>
                  <div className="weather-box text-center">
                    <h6>00:00</h6>
                    <img src="/images/weather-icons/icons8-sun-64.png" alt="Sunny"></img>
                    <p>25°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>01:00</h6>
                    <img src="/images/weather-icons/icons8-rainwater-catchment-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>02:00</h6>
                    <img src="/images/weather-icons/icons8-cloud-lightning-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>03</h6>
                    <img src="/images/weather-icons/icons8-rainwater-catchment-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Tuesday</h6>
                    <img src="/images/weather-icons/icons8-partly-cloudy-day-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Tuesday</h6>
                    <img src="/images/weather-icons/icons8-wind-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
        
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Sunday</h6>
                    <img src="images/weather-icons/icons8-snow-64.png" alt="Cloudy"></img>
                    <p>2200°C</p>
                  </div>
                </div>
            </div>
            <div className="col-lg-2 align-middle scollButton"> 
              <button className="btn btn-danger" id="next-week-btn">
                <i className="fas fa-chevron-right"></i>
                </button>
          </div> 
          </div>
          <div className="row mt-3 justify-content-center">
        
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default DayPartial;