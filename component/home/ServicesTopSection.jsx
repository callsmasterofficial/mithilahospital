import React from "react";

function ServicesTopSection() {
  return (
    <div className="mediic-top-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="top-mediic-section">
              <div
                className="mediic-section-title cursor-scale white"
                data-aos="flip-left"
              >
                <h1>PROVIDES</h1>
                <h1>BEST SERVICE</h1>
              </div>
              <div className="mediic-desc" data-aos="fade-up">
                <p>
                  Enthusiastically orchestrate competitive e-services whereas
                  superior Conveniently disintermediate innovative solutions
                  through impactfuls tailers without seamless markets network .
                </p>
              </div>
              <div
                className="mediic-btn cursor-scale small"
                data-aos="fade-down"
              >
                <a href="#">
                  View All Services <i className="bi bi-arrow-return-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesTopSection;
