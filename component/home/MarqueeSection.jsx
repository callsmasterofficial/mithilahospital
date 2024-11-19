import React from "react";

function MarqueeSection() {
  return (
    <div className="marquee-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="marquee cursor-scale" data-aos="zoom-out-left">
              <div className="marquee-single-box">
                <div className="marquee-content">
                  <h2>
                    GYNOCLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                  <h2>
                    CARDIOLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                  <h2>
                    NUEROLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                </div>
              </div>
              <div className="marquee-single-box">
                <div className="marquee-content">
                  <h2>
                    GYNOCLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                  <h2>
                    CARDIOLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                  <h2>
                    NUEROLOGIST
                    <span>
                      <img src="assets/images/resource/star.png" alt="" />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSection;
