import React from 'react';

function weekPartial(weatherResult, location, standard) {
  return (
<div className="container mt-2 bg-none">
  <div className="card weekDisplayContainer">
    <h5 className="card-title text-center mt-4">{location}</h5>

    <div className="card-body weekDisplayContainer">
      <div className="row justify-content-center">
        {weatherResult.length > 0 && (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {weatherResult.map((hour, index) => {
                // Calculate the temperature value to be used for color gradient
                let temperature = standard === 0 ? hour.temp_c : hour.temp_f;
                temperature = parseFloat(temperature);

                // Calculate the color values based on the temperature
                let gradientColor = getGradientColor(temperature,standard);

                return (
                  <div
                    key={hour.time}
                    className="col d-flex cont-border align-items-center justify-content-center text-center p-3 rounded"
                    style={{
                      border: '1px solid #a9c4dd',
                      background: `radial-gradient(circle at center, ${gradientColor}, #ffffff)`,
                    }}
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="row align-items-center justify-content-center mb-2">
                        <h6>{split(hour.time)}</h6>
                      </div>
                      <div className="row align-items-center justify-content-center mb-2">
                        <img
                          src={hour.condition.icon}
                          alt={hour.condition.text}
                          style={{ width: '50px', height: '50px' }}
                        />
                      </div>
                      <div className="row align-items-center justify-content-center">
                        {standard === 0 ? (
                          <p>{hour.temp_c}</p>
                        ) : (
                          <p>{hour.temp_f}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>



  );
}
function getGradientColor(temperature, standard) {
  let minTemperature = -10; // Minimum temperature value (Celsius)
  let maxTemperature = 40; // Maximum temperature value (Celsius)
  // Define the color gradient range
  const startColor = [0, 128, 255]; // RGB values for the starting color (blue)
  const endColor = [255, 0, 0]; // RGB values for the ending color (red)

  
    let normalizedTemperature = temperature;
  if (standard === 1) 
  {
normalizedTemperature = (temperature - 32) * (5 / 9);
  }
  // Calculate the percentage of the temperature within the range
  const percentage = (normalizedTemperature - minTemperature) / (maxTemperature - minTemperature);

  // Interpolate the RGB values based on the percentage
  const interpolatedColor = startColor.map((start, index) =>
    Math.round(start + percentage * (endColor[index] - start))
  );

  // Return the interpolated color as a CSS RGB string
  return `rgb(${interpolatedColor.join(',')})`;
}


function split(a) {
  var dateTimeParts = a.split(" ");

  var timePartfunc = dateTimeParts[1];

  return timePartfunc;
}

export default weekPartial;