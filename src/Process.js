import React from "react";
import { useContext } from "react";
import { themeContext } from "./Context";

const Process = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <section className="work-area">
        <div className="container">
          <div className="common-heading text-center pb-4">
            <h2
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
              className="pb-2"
            >
              Process's{" "}
            </h2>
            <p>
              At Nexgeno, we believe that this custom web application
              development process allows us to deliver high-quality,
              user-friendly web solutions that meet our clients' unique needs.
            </p>
          </div>
          <div className="work-item-wrap">
            <div className="work-line-shape">
              <img src="/images/procces_line.png" />
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="work-item">
                  <div className="work-icon">
                    <img src="/images/plan.png" />
                    <h4
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="number"
                    >
                      01
                    </h4>
                  </div>
                  <div className="work-content">
                    <h3 className="title">Discovery and Planning</h3>
                    <p>
                      We begin every web application development project with a
                      discovery and planning phase. During this phase, we work
                      closely with you to understand your business, your goals,
                      and your specific requirements for the web application. We
                      conduct a thorough analysis of your existing systems and
                      workflows to identify any areas that could benefit from
                      optimization or automation. We also identify key
                      stakeholders and establish clear lines of communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="work-item">
                  <div className="work-icon">
                    <img src="/images/prototype.png" />
                    <h4
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="number"
                    >
                      02
                    </h4>
                  </div>
                  <div className="work-content">
                    <h3 className="title">Design and Prototyping</h3>
                    <p>
                      Once we have a clear understanding of your requirements,
                      we move on to the design and prototyping phase. During
                      this phase, our team of designers creates a visual design
                      for the web application based on your branding and design
                      preferences. We then create a prototype of the web
                      application to give you an idea of what the final product
                      will look like and how it will function.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="work-item">
                  <div className="work-icon">
                    <img src="/images/rent.png" />
                    <h4
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="number"
                    >
                      03
                    </h4>
                  </div>
                  <div className="work-content">
                    <h3 className="title">Development and Testing</h3>
                    <p>
                      Once the design and prototype have been approved, we move
                      on to the development and testing phase. Our team of
                      developers writes code for the web application, following
                      industry best practices and using the latest technologies.
                      We conduct rigorous testing to ensure that the web
                      application is secure, reliable, and easy to use. We also
                      perform load testing to ensure that the web application
                      can handle heavy traffic without crashing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="work-item">
                  <div className="work-icon">
                    <img src="/images/networking.png" />
                    <h4
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="number"
                    >
                      04
                    </h4>
                  </div>
                  <div className="work-content">
                    <h3 className="title">Iteration & Improvement</h3>
                    <p>
                      Finally, we believe that a web application is never truly
                      finished.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
