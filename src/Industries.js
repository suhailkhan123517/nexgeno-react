import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { industriesAll } from "./utils/Database";
import { themeContext } from "./Context";
import Button from "./components/button/Button";

const Industries = () => {
  const navigate = useNavigate();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
      className="industries_section pb-3 pb-lg-0"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="common-heading text-center ">
              <span className="colr_white mt-3"># INDUSTRIES</span>
              <h2
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                className="mb30"
              >
                Serving Our Clients Across Diverse Industries
              </h2>
            </div>
          </div>

          {industriesAll.map((item) => {
            const { id, link, icon, stitle } = item;
            return (
              <div key={id} className="col-md-2 col-4">
                <div onClick={() => navigate(link)} className="industries_box">
                  <div className="icon">
                    <img className="normal" src={icon} alt="" />
                  </div>
                  <div className="text">
                    <h4
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                    >
                      {stitle}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="btn-main1 d-flex justify-content-center">
            {/* <NavLink to="/industries" class="btn-main mt-3">
              View More
              <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </NavLink> */}
            <Button
              url="/industries"
              icon="fa fa-arrow-right ms-2"
              text="View More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
