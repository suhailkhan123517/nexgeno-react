import React, { useContext } from "react";
import { themeContext } from "./Context";
import Button from "./components/button/Button";

const Slider = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <section
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
        id="hero"
        className="d-flex align-items-center  text-center"
      >
        <div className="video_slider">
          <video
            width="100%"
            className="elVideo"
            loop
            autoPlay
            playsInline
            muted
            id="video-slider-1"
          >
            <source src="images/banner_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 posotion_text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Innovative web solutions for modern businesses
              </h1>
              <h3
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                Connecting businesses to the digital world
              </h3>
              <div className="btn-main1">
                {/* <NavLink to="/contact.htm" class="btn-main mt-3">
                  Get Started
                  <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                </NavLink> */}
                <Button url="/contact.htm" text="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
