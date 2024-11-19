import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row hero-bg">
          <div className="col-lg-12">
            <div className="hero-content text-center">
              <h1>
                Healthcare
                <span className="wood-animation">
                  <img src="assets/images/slider/heart.png" alt="" />
                </span>
              </h1>
              <h1 className="mediic-style cursor-scale">
                <span className="team-mbr">
                  <img src="assets/images/slider/team-img.png" alt="img" />
                  MEMBER
                </span>
                DOCTORS
              </h1>
              <div className="hero-btm-boxs">
                <div className="mediic-service-bx cursor-scale small">
                  <div className="mediic-hero-icon">
                    <img src="assets/images/slider/tick.png" alt="icon" />
                  </div>
                  <div className="mediic-hero-content">
                    <h4>Best Hospital in Supaul</h4>
                    <p>Rapidiously reinvent long-term impact collaboration</p>
                  </div>
                </div>
                <div className="mediic-btn cursor-scale small">
                  <Link href="/about-us">
                    Know More
                    <i className="bi bi-arrow-return-right" />
                  </Link>
                </div>
              </div>
              <div className="hero-socail-icon cursor-scale small">
                <a href="#">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
              <div className="hero-cnct-nmbr cursor-scale small">
                <h4>+980 123 (4567) 890</h4>
              </div>
              <div className="hero-all-shape cursor-scale small">
                <div className="hero-shape">
                  <img src="assets/images/slider/hero-img.png" alt="" />
                </div>
                <div className="hero-shape2">
                  <img src="assets/images/slider/plus.png" alt="" />
                </div>
                <div className="hero-shape3">
                  <img src="assets/images/slider/plus.png" alt="" />
                </div>
                <div className="hero-shape4">
                  <img src="assets/images/slider/arrow.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
