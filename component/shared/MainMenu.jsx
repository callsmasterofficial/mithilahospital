import Image from "next/image";
import Link from "next/link";
import React from "react";

function MainMenu() {
  return (
    <div id="sticky-header" className="mediic_nav_manu">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo cursor-scale small">
              <Link className="logo_img" href="/" title="Mithila Hospital ">
                <Image
                  src="/assets/images/logo.png"
                  width={300}
                  height={70}
                  alt="logo"
                />
              </Link>
              <Link className="main_sticky" href="/" title="Mithila Hospital  ">
                <img src="assets/images/logo2.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-10">
            <nav className="mediic_menu">
              <ul className="nav_scroll">
                <li>
                  <Link className="mdy-hover cursor-scale small" href="/">
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="mdy-hover cursor-scale small"
                    href="/services-facilities"
                  >
                    FACILITIES{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="mdy-hover cursor-scale small"
                    href="/doctors"
                  >
                    DOCTORS{" "}
                  </Link>
                </li>
                <li>
                  <a className="mdy-hover cursor-scale small" href="#">
                    ABOUT US
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/about-us">About Hospital</Link>
                    </li>
                    <li>
                      <Link href="/our-mission">Our Mission</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="mdy-hover cursor-scale small"
                    href="/cantact-us"
                  >
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <a className="mdy-hover cursor-scale small" href="#">
                    GALLERY
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/image-gallery">Image Gallery</Link>
                    </li>
                    <li>
                      <Link href="/video-gallery">Video Gallery</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="mdy-hover cursor-scale small" href="#">
                    OTHERS{" "}
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/careers">CAREERS </Link>
                    </li>
                    <li>
                      <Link href="/blogs">LATEST NEWS </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mediic-right-side cursor-scale small">
                <div className="search-box-btn search-box-outer me-2">
                  <a href="tel:9473020700">
                    <i className="fa-solid fa-phone" />
                  </a>
                </div>
                <div className="search-box-btn search-box-outer me-2">
                  <a href="https://g.co/kgs/p4UcpY9" target="_blank">
                    <i className="fa-solid fa-map" />
                  </a>
                </div>

                <div className="sidebar">
                  <div className="nav-btn navSidebar-button">
                    <span>
                      <i className="bi bi-grid-3x3-gap-fill" />
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
