import React from 'react';

function headPartial() {
  return (
    <div className="container headPartial">
      <div className="row">
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <img className="img-thumbnail rounded-circle" style={{ width: '100%', height: 'auto' }} src="/images/turtleLogo.jpg" alt="Turtle Logo" />
        </div>
        <div className="col-lg-9">
          <div className="row d-flex align-items-center" style={{ height: '100%' }}>
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="text-center display-4 font-weight-bold">Turtleneck</h1>
              <h1 className="text-center">Weather App</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default headPartial;