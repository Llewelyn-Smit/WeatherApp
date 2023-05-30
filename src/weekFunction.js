import React from 'react';

function weekPartial({ dayData }) {
  return (
    <div className="container mt-2 bg-none">
      <div className="card weekDisplayContainer">
      <h5 className="card-title text-center mt-4">Weekly Weather</h5>
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
                    <h6>Monday</h6>
                    <img src="/images/weather-icons/icons8-sun-64.png" alt="Sunny"></img>
                    <p>25°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Tuesday</h6>
                    <img src="/images/weather-icons/icons8-rainwater-catchment-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Tuesday</h6>
                    <img src="/images/weather-icons/icons8-cloud-lightning-64.png" alt="Rainy"></img>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="">
                  <div className="weather-box text-center">
                    <h6>Tuesday</h6>
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

export default weekPartial;