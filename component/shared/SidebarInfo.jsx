import React from "react";

function SidebarInfo() {
  return (
    <div className="xs-sidebar-group info-group">
      <div className="xs-overlay xs-bg-black" />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a href="#" className="close-side-widget">
              <i className="far fa-times-circle" />
            </a>
          </div>
          <div className="sidebar-textwidget">
            {/* Sidebar Info Content */}
            <div className="sidebar-info-contents">
              <div className="content-inner2">
                <div className="nav-logo">
                  <a href="index-2.html">
                    <img src="assets/images/logo2.png" alt="" />
                  </a>
                </div>
                <div className="row padding-two">
                  <div className="col-lg-6 padding-0 pl-0 pr-0">
                    <div className="content-thumb-box">
                      <img src="assets/images/resource/blog6.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 padding-0 pl-0 pr-0">
                    <div className="content-thumb-box">
                      <img src="assets/images/resource/blog5.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 padding-0 pl-0 pr-0">
                    <div className="content-thumb-box">
                      <img src="assets/images/resource/blog4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 padding-0 pl-0 pr-0">
                    <div className="content-thumb-box">
                      <img src="assets/images/resource/blog3.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="contact-info">
                  <h2>Contact Info</h2>
                  <ul className="list-style-one">
                    <li>
                      <span>
                        <i className="bi bi-envelope" />
                      </span>
                      Chicago 12, Melborne City, USA
                    </li>
                    <li>
                      <span>
                        <i className="bi bi-telephone-forward" />
                      </span>
                      (+001) 123-456-7890
                    </li>
                    <li>
                      <span>
                        <i className="bi bi-geo-alt" />
                      </span>
                      Example.com
                    </li>
                    <li>
                      <span>
                        <i className="bi bi-clock" />
                      </span>
                      Week Days: 09.00 to 18.00 Sunday: Closed
                    </li>
                  </ul>
                </div>
                {/* Social Box */}
                <ul className="social-box">
                  <li className="facebook">
                    <a href="#" className="fab fa-facebook-f" />
                  </li>
                  <li className="twitter">
                    <a href="#" className="fab fa-instagram" />
                  </li>
                  <li className="linkedin">
                    <a href="#" className="fab fa-twitter" />
                  </li>
                  <li className="instagram">
                    <a href="#" className="fab fa-pinterest-p" />
                  </li>
                  <li className="youtube">
                    <a href="#" className="fab fa-linkedin-in" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarInfo;
