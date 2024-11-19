import React from "react";

function SubscribeSection() {
  return (
    <div className="mediic-subscribe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="subscribe-content" data-aos="fade-up">
              <div className="subscribe-icon cursor-scale">
                <img src="assets/images/resource/bag.png" alt="" />
              </div>
              <div className="subscribe-title">
                <h1 className="cursor-scale small">
                  Since 2007 We’re working Medical group more than 1200+ Patient
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="mediic-button text-right cursor-scale small"
              data-aos="fade-down"
            >
              <a href="contact.html" className="mediic-btn">
                <span className="mediic-btn__hover" />
                <span className="mediic-btn__hover" />
                <span className="mediic-btn__hover" />
                <span className="mediic-btn__hover" />
                <span className="mediic-btn__hover" />
                <span className="mediic-btn__hover" />
                Contact Us
                <i className="bi bi-arrow-return-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
