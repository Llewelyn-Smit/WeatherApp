import React from 'react';

function weekPartial() {
  return (
    <div className="container mt-2">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Weekly Weather</h5>
       
        <div className="row justify-content-center">
          <div className="col-md-1">
            <button className="btn btn-primary" id="previous-week-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Monday</h6>
              <img src="weather-icons/sunny.png" alt="Sunny"></img>
              <p>25°C</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Tuesday</h6>
              <img src="weather-icons/rainy.png" alt="Rainy"></img>
              <p>20°C</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Tuesday</h6>
              <img src="weather-icons/rainy.png" alt="Rainy"></img>
              <p>20°C</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Tuesday</h6>
              <img src="weather-icons/rainy.png" alt="Rainy"></img>
              <p>20°C</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Tuesday</h6>
              <img src="weather-icons/rainy.png" alt="Rainy"></img>
              <p>20°C</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Tuesday</h6>
              <img src="weather-icons/rainy.png" alt="Rainy"></img>
              <p>20°C</p>
            </div>
          </div>
   
          <div className="col-md-1">
            <div className="weather-box text-center">
              <h6>Sunday</h6>
              <img src="weather-icons/cloudy.png" alt="Cloudy"></img>
              <p>22°C</p>
            </div>
          </div>
          <div className="col-md-1"> 
            <button className="btn btn-primary" id="next-week-btn">
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