import React from "react";

function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div
              className="widget widgets-company-info"
              data-aos="zoom-in-right"
            >
              <div className="company-logo cursor-scale small">
                <a href="index-2.html">
                  <img src="assets/images/logo2.png" alt="logo" />
                </a>
              </div>
              <div className="company-info-desc">
                <p>
                  Completely promote interdependent systems for Latest update
                  news this Medical.
                </p>
              </div>
              <form>
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your E-Mail"
                  />
                  <button type="submit" className="submits-btn">
                    <i className="bi bi-send-check" />
                  </button>
                </div>
                <div className="subscribe_form_send" />
                <label className="widget-check">
                  <input type="checkbox" />
                  Agree Terms and Condition
                  <span className="checkmark" />
                </label>
              </form>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="widget widget-nav-menu" data-aos="zoom-out-up">
              <h4 className="widget-title">Company</h4>
              <div className="menu-quick-link-content">
                <ul className="footer-menu cursor-scale small">
                  <li>
                    <a href="index-2.html"> Home </a>
                  </li>
                  <li>
                    <a href="about.html"> About </a>
                  </li>
                  <li>
                    <a href="service.html"> Services </a>
                  </li>
                  <li>
                    <a href="blog-details.html"> Blog </a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="widget widget-nav-menu" data-aos="zoom-out">
              <h4 className="widget-title">Useful Links</h4>
              <div className="menu-quick-link-content">
                <ul className="footer-menu cursor-scale small">
                  <li>
                    <a href="#"> Partners </a>
                  </li>
                  <li>
                    <a href="testimonial.html"> Testimonial </a>
                  </li>
                  <li>
                    <a href="appointment.html"> Appoinment </a>
                  </li>
                  <li>
                    <a href="#"> Privacy </a>
                  </li>
                  <li>
                    <a href="faq.html"> FAQ </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mediic-address" data-aos="zoom-in-left">
              <h4 className="widget-title">Contacts</h4>
              <div className="footer-mediic-contact">
                <div className="place-location">
                  <p>102/ B Street, New Elephant Road, Sandigo, USA</p>
                </div>
                <div className="mediic-info">
                  <h5>Email-US</h5>
                  <p>example@gmail.com</p>
                </div>
                <div className="mediic-info">
                  <h5>Call Now</h5>
                  <p>+123 (4567) - 890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb" data-aos="zoom-in-right">
              <img src="assets/images/resource/footer-img-1.png" alt="" />
            </div>
            <div className="footer-thumb1" data-aos="zoom-in-left">
              <img src="assets/images/resource/footer-img-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row footer-btm d-flex align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="mediic-social-icon cursor-scale small">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"> </i>
              </a>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mediic-company-desc text-right">
              <p>
                This is a sample website - mediic ©2024 - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
