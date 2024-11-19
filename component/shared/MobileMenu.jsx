import Link from "next/link";
import React from "react";

function MobileMenu() {
  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
      <div className="mobile-menu">
        <nav className="mediic_menu">
          <ul className="nav_scroll">
            <li>
              <Link className="mdy-hover" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="mdy-hover" href="/services-facilities">
                FACILITIES
              </Link>
            </li>
            <li>
              <Link className="mdy-hover" href="/doctors">
                DOCTORS
              </Link>
            </li>
            <li>
              <a className="mdy-hover" href="#">
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
              <Link className="mdy-hover" href="/contanct-us">
                CONTACT US
              </Link>
            </li>
            <li>
              <a className="mdy-hover" href="#">
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
              <a className="mdy-hover" href="#">
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
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
