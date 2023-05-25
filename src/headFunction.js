import React from 'react';

function headPartial() {
  return (
    <div className="container headPartial py-5">
      <div className="row">
        <div className="col-lg-2 d-flex align-items-center">
          <img className="img-thumbnail rounded-circle" style={{ width: '100px', height: '100px' }} src="/images/turtleLogo.jpg" alt="Turtle Logo" />
        </div>
        <div className="col-lg-10">
          <div className="row d-flex" style={{ height: '100%' }}>
            <div className="col-12 d-flex">
              <h1 className="text-center display-2 font-weight-lighter">Turtleneck</h1>
              <h3 className="text-center display-8 font-weight-light">Weather</h3>
              <h3 className='text-center display-8 font-weight-light'> App</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default headPartial;