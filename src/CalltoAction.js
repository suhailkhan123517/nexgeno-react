import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "./Context";

const CalltoAction = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <section className="calltoaction">
        <div className="calltoaction_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3
                style={{
                  color: darkMode ? "black" : "",
                }}
                className="pb-3"
              >
                Are you ready to take your business to the next level with a
                custom web application?{" "}
              </h3>
              <p
                style={{
                  color: darkMode ? "black" : "",
                }}
              >
                Contact us today to schedule a consultation with our expert
                team. We'll work with you to understand your unique business
                needs and develop a solution that meets your specific
                requirements. Don't wait - let us help you drive growth and
                success for your business with our high-performance, intuitive,
                and secure web applications. Contact us now to get started!
              </p>
            </div>
            <div className="col-md-4">
              <div className="-cta-btn mt70 text-end mt-lg-4 mt-2 mb-lg-0 mb-2">
                <div className="free-cta-title wow zoomInDown black_button">
                  <NavLink to="/contact.htm">
                    Get Connect
                    <i
                      className="fa fa-arrow-right ms-2"
                      aria-hidden="true"
                    ></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalltoAction;
