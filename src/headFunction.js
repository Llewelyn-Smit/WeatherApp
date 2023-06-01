import React from 'react';

function headPartial() {
  return (

<div className="container">
  <div className="row">
    <div className="col d-flex justify-content-end">
      <img className="img-thumbnail rounded-circle" style={{ width: '100px', height: '100px' }} src="/images/turtleLogo.jpg" alt="Turtle Logo" />
    </div>
    <div className="col">
      <div className="row">
        <h1 className="text-center font-weight-bold" style={{ fontSize: 'min(8vw, max(6vw, 40px))' }}>Turtleneck</h1>
      </div>
      <div className="row">
        <h3 className="text-center font-weight-light" style={{ fontSize: 'min(4vw, 2.5vw)' }}>WeatherApp</h3>
      </div>
    </div>
  </div>
</div>



/*

<div className="container headPartial py-5">
  <div className="row">
    <div className="col-lg-10">
      <div className="row d-flex" style={{ height: '100%' }}>
        <div className="col-12 d-flex flex-column align-items-center">
          <h1 className="text-center display-2 font-weight-lighter">Turtleneck</h1>
          <div className="d-flex justify-content-center">
            <h3 className="text-center display-8 font-weight-light">Weather</h3>
            <h3 className='text-center display-8 font-weight-light'> App</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-2 d-flex align-items-center">
      <img className="img-thumbnail rounded-circle" style={{ width: '100px', height: '100px' }} src="/images/turtleLogo.jpg" alt="Turtle Logo" />
    </div>
  </div>
</div>


*/ 




  );
}

export default headPartial;