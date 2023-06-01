import React from 'react';
var timePart;
function weekPartial(weatherResult, location, standard) {
  return (
    <div className="container mt-2 bg-none">
    <div className="card weekDisplayContainer">
      <h5 className="card-title text-center mt-4">{location}</h5>

      <div className="card-body weekDisplayContainer">
        <div className="row justify-content-center">
          <div className="col-lg-2 align-middle scollButton">
            <div className="container">
              {weatherResult.length > 0 && (
                <div className="row">
                  {weatherResult.map((hour, index) => (
                    <div
                      key={hour.time}
                      className="col-lg-2 d-flex cont-border text-center"
                    >
                      <div className="">
                        <div className="d-flex justify-content-center weather-box text-center">
                          {split(hour.time)}

                          <h6>{timePart}</h6>

                          <img
                            src={hour.condition.icon}
                            alt={hour.condition.text}
                          />

                          {console.log("tempStandard state:", standard)}

                          {standard === 0 ? (
                            <p>{hour.temp_c}</p>
                          ) : (
                            <p>{hour.temp_f}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {Array.from(
                    { length: Math.ceil(weatherResult.length / 6) },
                    (_, i) => (
                      <div key={i} className="w-100"></div>
                    )
                  )}
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

function split(a) {
  var dateTimeParts = a.split(" ");

  var timePartfunc = dateTimeParts[1];

  return timePartfunc;
}

export default weekPartial;