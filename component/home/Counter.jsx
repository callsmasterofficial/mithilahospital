import React from "react";

function Counter() {
  return (
    <div className="counter-serction">
      <div className="container">
        <div className="row counter-bg align-items-center">
          <div className="col-lg-12">
            <div className="counter-items">
              <div className="counter-left-side" data-aos="fade-right">
                <div className="counter-thumb">
                  <img src="assets/images/slider/counter-img.png" alt="" />
                </div>
                <div className="counter-title cursor-scale small">
                  <h2>Medical Achivement</h2>
                  <h2>Health Protection</h2>
                </div>
              </div>
              <div className="counter-right-side cursor-scale">
                <div className="counter-single-box bx-1" data-aos="fade-up">
                  <div
                    className="odometer-wrapper counter-box-title"
                    data-count={1000}
                  >
                    <h1 className="odometer" />
                    <h1>+</h1>
                  </div>
                  <div className="counter-desc">
                    <p>Satisfied Patients</p>
                  </div>
                </div>
                <div className="counter-single-box" data-aos="fade-down">
                  <div
                    className="odometer-wrapper counter-box-title"
                    data-count={100}
                  >
                    <h1 className="odometer" />
                    <h1>%</h1>
                  </div>
                  <div className="counter-desc">
                    <p>Satisfaction Rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mediic-shape-cntr">
            <img src="assets/images/resource/crcle-bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
