import React from 'react';
function searchPartial() {
  return (
    <div className="container mt-2 mb-2">

    <div id="weather-form row" className='searchBar'>
      <form>
        <div className='col-lg-12 d-flex searchCol'>
          <div className="form-group col-lg-6">
            <label htmlFor="location-input">Location:</label>
            <input type="text" className="form-control" id="location-input" placeholder="Enter location"></input>
          </div>
          <div className="form-group col-lg-4">
            <label htmlFor="date-input">Date:</label>
            <input type="date" className="form-control" id="date-input"></input>
          </div>
          <div className="col-lg-2 d-flex flex-row-reverse searchCol">
          <button type="submit" className="btn btn-danger searchButton"><i className="fas fa-light fa-magnifying-glass-location fa-bounce"></i></button>
          </div>
        </div>
      </form>
  </div>
</div>
  );
}

export default searchPartial;