import React from 'react';

function headPartial() {
  return (

<div className="container pt-3">
  <div className="row">
    <div className="col-lg-2 col-5 d-flex justify-content-center my-auto">
      <img className="img-thumbnail rounded-circle" style={{ width: '100px', height: '100px' }} src="/images/turtleLogo.jpg" alt="Turtle Logo" />
    </div>
    <div className="col-lg-10 col-7">
      <div className="row">
        <h1 className="text-center" style={{ fontSize: 'min(8vw, max(6vw, 40px))' }}>Turtleneck</h1>
      </div>
      <div className="row">
        <h4 className="text-center font-weight-light" style={{ fontSize: 'min(4vw, 2.5vw)' }}>WeatherApp</h4>
      </div>
    </div>
  </div>
</div>
  );
}

export default headPartial;