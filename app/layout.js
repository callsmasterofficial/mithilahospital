import localFont from "next/font/local";
import "./globals.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/all.min.css";
import "../public/assets/css/flaticon.css";
import "../public/assets/css/theme-default.css";
import "../public/assets/css/meanmenu.min.css";
import "../public/venobox/venobox.css";
import "../public/assets/css/bootstrap-icons.css";
import "../public/assets/css/style.css";
import "../public/assets/css/odometer-theme-default.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/swiper.min.css";
import Loader from "@/component/shared/Loader";
import MainMenu from "@/component/shared/MainMenu";
import Script from "next/script";
import MobileMenu from "@/component/shared/MobileMenu";
import Footer from "@/component/shared/Footer";
import SidebarInfo from "@/component/shared/SidebarInfo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mithila Hospital",
  description: "Best hospital in Supaul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script src="assets/js/vendor/modernizr-3.5.0.min.js"></Script>
        <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"></Script>
        <Loader />
        <div className="cursor"></div>
        <div className="cursor2"></div>
        <MainMenu />
        <MobileMenu />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
            <SidebarInfo />
          </div>
        </div>
        <div id="progress" className="progress hide">
          <div id="progress-value"></div>
        </div>
        <Script src="assets/js/gsap.min.js"></Script>

        <Script src="assets/js/ScrollSmoother.min.js"></Script>

        <Script src="assets/js/ScrollToPlugin.min.js"></Script>

        <Script src="assets/js/ScrollTrigger.min.js"></Script>

        <Script src="assets/js/aos.js"></Script>

        <Script src="assets/js/vendor/jquery-3.6.2.min.js"></Script>

        <Script src="assets/js/odometer.min.js"></Script>

        <Script src="assets/js/bootstrap.min.js"></Script>

        <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>

        <Script src="venobox/venobox.js"></Script>

        <Script src="venobox/venobox.min.js"></Script>

        <Script src="assets/js/jquery.meanmenu.js"></Script>

        <Script src="assets/js/jquery.scrollUp.js"></Script>

        <Script src="assets/js/appear.js"></Script>

        <Script src="assets/js/jquery.barfiller.js"></Script>

        <Script src="assets/js/theme.js"></Script>

        <Script src="assets/js/my.js"></Script>
      </body>
    </html>
  );
}
