import Link from "next/link";
import React from "react";

function FeatureSection() {
  return (
    <div className="feature-serction">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-single-box" data-aos="fade-down">
              <div className="feature-head">
                <div className="head-title">
                  <h2>Our Doctors</h2>
                </div>
                <div className="mediic-link cursor-scale small">
                  <Link href="/doctors">
                    <i className="bi bi-arrow-return-right" />
                  </Link>
                </div>
              </div>
              <div className="feature-content text-center">
                <div className="mediic-icon">
                  <img src="assets/images/resource/srvc-tm.png" alt="" />
                </div>
                <h3>
                  10 <span className="mddle-pd">+</span>
                  <span>Doctors</span>
                </h3>
                <p>Rapidiously reinvent long-term impact collaboration</p>
              </div>
              <div className="mediic-hover-box hover-bx" />
              <div className="mediic-hover-box hover-bx2" />
              <div className="mediic-hover-box hover-bx3" />
              <div className="mediic-hover-box hover-bx4" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-single-box bx-2" data-aos="fade-up">
              <div className="feature-head">
                <div className="feature-btn cursor-scale small">
                  <a href="tel:9473020700">BOOKING</a>
                </div>
                <div className="head-title">
                  <h2>Appoinments</h2>
                </div>
              </div>
              <div className="feature-content text-center">
                <div className="mediic-icon">
                  <img src="assets/images/resource/call.png" alt="" />
                </div>
                <h4>
                  <a href="tel:9473020700">9473020700 </a>
                </h4>
                <p>Call Us for Booking appoinments online 24 hrs available</p>
              </div>
              <div className="mediic-hover-box hover-bx" />
              <div className="mediic-hover-box hover-bx2" />
              <div className="mediic-hover-box hover-bx3" />
              <div className="mediic-hover-box hover-bx4" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-single-box bx-3" data-aos="fade-down">
              <div className="feature-head">
                <div className="head-title">
                  <h2>Locations</h2>
                </div>
                <div className="mediic-link cursor-scale small">
                  <a href="https://g.co/kgs/p4UcpY9" target="_blank">
                    <i className="bi bi-arrow-return-right" />
                  </a>
                </div>
              </div>
              <div className="feature-content text-center">
                <div className="mediic-icon">
                  <img src="assets/images/resource/location.png" alt="" />
                </div>
                <p>Rapidiously reinvent long-term impact collaboration</p>
                <div className="feature-btn cursor-scale small">
                  <a href="https://g.co/kgs/p4UcpY9" target="_blank">
                    Visit
                  </a>
                </div>
              </div>
              <div className="mediic-hover-box hover-bx" />
              <div className="mediic-hover-box hover-bx2" />
              <div className="mediic-hover-box hover-bx3" />
              <div className="mediic-hover-box hover-bx4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
