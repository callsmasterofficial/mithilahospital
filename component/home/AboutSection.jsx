import Link from "next/link";
import React from "react";

function AboutSection() {
  return (
    <div className="about-serction">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-mediic-section">
              <div
                className="mediic-section-title cursor-scale"
                data-aos="flip-right"
              >
                <h1>
                  About Hospital
                  <span>
                    <img src="assets/images/resource/star.png" alt="" />
                  </span>
                </h1>
              </div>
              <div
                className="counter-single-box bx-2 cursor-scale"
                data-aos="fade-down"
              >
                <div
                  className="odometer-wrapper counter-box-title"
                  data-count={10}
                >
                  <h1 className="odometer" />
                  <h1>+</h1>
                  <p className="counter-desc">YEARS OF EXPERIENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row about-bg align-items-center">
          <div className="col-lg-7">
            <div className="about-thumb" data-aos="fade-up-right">
              <img src="assets/images/resource/about.png" alt="" />
              <div className="thumbs-bxs">
                <div className="icon">
                  <img src="assets/images/resource/heart.png" alt="" />
                </div>
                <div className="text-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="250.5"
                    height="250.5"
                    viewBox="0 0 250.5 250.5"
                  >
                    <path
                      d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                      id="e-path-35ee1b2"
                    />
                    <text>
                      <textPath
                        id="e-text-path-35ee1b2"
                        href="#e-path-35ee1b2"
                        startOffset="0%"
                      >
                        NEUROLOGIST * GYNOCLOGIST * HEALTHCARE *
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5" data-aos="fade-up-left">
            <div className="mediic-section-title2">
              <h4>ABOUT Hospital</h4>
              <h3 className="cursor-scale small">
                Since 2017 We’re working Medical group of more than 1000+
                Patients help from our medical
              </h3>
            </div>
            <div className="about-service-list">
              <h4>
                Mithila Hospital uses industry-standard equipment and technology
                to deliver exceptional customer satisfaction we have full time
                as well as part time specialist Consultants and a team of
                skilled doctors that are available round the clock.
              </h4>
              <p>
                The hospital is equipped with all major diagnostic services and
                the intensive care unit that manages emergency cases. The
                hospital has been identified as an institution, which is
                committed to wellbeing of the community. The staff is well
                trained and committed. Good health isn&apos;t simply the absence
                of disease but the complete physical, mental, and social
                well-being of a person. At MITHILA HOSPITAL Bihar, this is a
                belief that is reflected in its predictive, preventive approach
                to healthcare .Our facility endeavors to provide dedicated,
                quality health care as well as service to humanity.
              </p>
              <p>
                The belief that clinical services supported by medical education
                and research of the highest quality can help both the medical
                community. Our staff and doctors ensure the highest protocol and
                are extremely experienced in their field.
              </p>
              <p>
                The facility is equipped with the most modern medical diagnostic
                & therapeutic equipment. MITHILA HOSPITAL advanced Centers of
                Excellence, state-of-the-art facilities and patient-centric
                services provide the necessary backbone for holistic,
                comprehensive and contemporary treatment for patients making it
                the best multispecialty hospital in Supaul, Bihar.
              </p>
              <p>
                We are a multispecialty hospital located in the heart of Supaul,
                Bihar. Our motto is to provide care with utmost concern for our
                patients. Our commitment to delivering quality care to improve
                our patients’ daily lives has earned our organization several
                accolades in media and the industry. MITHILA HOSPITAL is
                committed to achieving and maintaining excellence in health care
                services, medical education, and research....
              </p>
            </div>
            <div className="mediic-btn cursor-scale small">
              <Link href="/about-us">
                More About <i className="bi bi-arrow-return-right" />
              </Link>
            </div>
          </div>
          <div className="mediic-shape" data-aos="fade-up-left">
            <img src="assets/images/resource/dctr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
