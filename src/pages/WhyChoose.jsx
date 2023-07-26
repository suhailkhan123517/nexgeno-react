import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context";

export default function WhyChoose() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <section
        className={`why_choose_section ${
          darkMode ? "dark_why" : "darkpink_color"
        } `}
      >
        <div className="container">
          <div className="col-md-12">
            <div className="common-heading text-center pb-4">
              <h2
                style={{
                  color: darkMode ? "white" : "",
                }}
                className="pb-2"
              >
                Why Choose Nexgeno For Web Application Development Services?
              </h2>
              <p>
                Choosing the right custom web application development company to
                partner with is critical to the success of your business. With
                so many options available, it can be difficult to know which
                company to trust with your web application development needs.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="whychoose_box pe-3 ps-3 mb-lg-5">
                <div className="choose-icon">
                  <img src="/images/user-experience.png" alt="Icon" />
                </div>
                <div className="whuchoose_content text-center">
                  <h3 className="title pt-4 fs-18">Expertise and Experience</h3>
                  <p className="pt-1">
                    With over 11 years of experience in web application
                    development, our team of skilled developers has the
                    expertise to deliver cutting-edge web solutions to
                    businesses of all sizes and industries. We use the latest
                    technologies and best practices to ensure that our solutions
                    are innovative, intuitive, and secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="whychoose_box pe-3 ps-3">
                <div className="choose-icon">
                  <img src="/images/custom.png" alt="Icon" />
                </div>
                <div className="whuchoose_content text-center">
                  <h3 className="title pt-4 fs-18">Customized Solutions</h3>
                  <p className="pt-1">
                    At Nexgeno, we understand that every business has unique
                    needs. That's why we take the time to understand your
                    business and develop customized web solutions that are
                    tailored to your specific requirements. Our agile
                    development methodology ensures that we can quickly iterate
                    on our solutions to ensure that they meet your needs and
                    exceed your expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="whychoose_box pe-3 ps-3">
                <div className="choose-icon">
                  <img src="/images/quality.png" alt="Icon" />
                </div>
                <div className="whuchoose_content text-center">
                  <h3 className="title pt-4 fs-18">
                    Quality and Attention to Detail
                  </h3>
                  <p className="pt-1">
                    We believe that quality should never be compromised. That's
                    why we pay meticulous attention to detail throughout the web
                    application development process to ensure that our solutions
                    are of the highest quality. We follow industry-standard
                    security protocols to ensure that your web application is
                    always protected against cyber threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="whychoose_box pe-3 ps-3">
                <div className="choose-icon">
                  <img src="/images/communication.png" alt="Icon" />
                </div>
                <div className="whuchoose_content text-center">
                  <h3 className="title pt-4 fs-18">
                    Communication and Collaboration
                  </h3>
                  <p className="pt-1">
                    We believe that communication and collaboration are key to
                    the success of any project. That's why we work closely with
                    our clients to ensure that we are always on the same page.
                    We provide regular updates and feedback throughout the
                    development process to ensure that our solutions meet your
                    needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="whychoose_box pe-3 ps-3">
                <div className="choose-icon">
                  <img src="/images/satisfaction.png" alt="Icon" />
                </div>
                <div className="whuchoose_content text-center">
                  <h3 className="title pt-4 fs-18">Customer Satisfaction</h3>
                  <p className="pt-1">
                    At Nexgeno, we are committed to our clients' success. We
                    believe that our success is tied to yours, which is why we
                    always go above and beyond to ensure that our clients are
                    satisfied with our services. We take pride in our work and
                    are dedicated to providing exceptional customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
