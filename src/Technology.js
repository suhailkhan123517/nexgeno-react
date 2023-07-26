import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { technologyD } from "./utils/Database";
import { useContext } from "react";
import { themeContext } from "./Context";
import Button from "./components/button/Button";

const Technology = () => {
  const navigate = useNavigate();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <section className={darkMode ? "dark" : "technology_section"}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="common-heading text-center">
                <span># IT TECHNOLOGY</span>
                <h2
                  style={{
                    color: darkMode ? "white" : "",
                  }}
                  className="mb30"
                >
                  We Deliver Solution With Goal Of Trusting Relationships
                </h2>{" "}
              </div>
            </div>
            {technologyD.map((item) => {
              const { id, stitle, link, icon } = item;
              return (
                <div key={id} className="col-md-2 col-3">
                  <div className="technology_box">
                    <div onClick={() => navigate(link)} className="inner-box">
                      <div className="icon">
                        <img
                          style={{
                            color: darkMode ? "white" : "",
                          }}
                          className="img-fluid"
                          src={icon}
                        />
                      </div>
                      <div className="text">
                        <h4>{stitle}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="btn-main1 d-flex justify-content-center">
              {/* <NavLink to="/technology" class="btn-main mt-3">
                View More
                <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </NavLink> */}
              <Button
                url="/technology"
                icon="fa fa-arrow-right ms-2"
                text="View More"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
