import React from 'react';

function searchPartial() {
  return (
    <div className="container mt-2 mb-2">

    <div id="weather-form">
      <form>
        <div className="form-group">
          <label htmlFor="location-input">Location:</label>
         <input type="text" className="form-control" id="location-input" placeholder="Enter location"></input>
        </div>
       <div className="form-group">
          <label htmlFor="date-input">Date:</label>
         <input type="date" className="form-control" id="date-input"></input>
        </div>
      <button type="submit" className="btn btn-primary">Search</button>
      </form>
  </div>
</div>
  );
}

export default searchPartial;