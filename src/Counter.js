import React, { useState } from "react";
import { useContext } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { themeContext } from "./Context";

const Counter = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div className="coutner_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="common-heading text-center pb-4">
                  <h2
                    style={{
                      background: darkMode ? "black" : "",
                      color: darkMode ? "white" : "",
                    }}
                    className="pb-2 pt-3"
                  >
                    Our Agency in Numbers
                  </h2>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counter_box">
                  <div className="counter_hed">
                    {counterOn && (
                      <CountUp start={0} end={4000} duration={2} delay={0} />
                    )}{" "}
                    +{" "}
                  </div>
                  <p>Total Projects Completed</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counter_box">
                  <div className="counter_hed">
                    {counterOn && (
                      <CountUp start={0} end={1000} duration={2} delay={0} />
                    )}{" "}
                    +{" "}
                  </div>
                  <p>Active Clients</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="counter_box">
                  <div className="counter_hed">
                    {counterOn && (
                      <CountUp start={0} end={11} duration={2} delay={0} />
                    )}{" "}
                    +{" "}
                  </div>
                  <p>Years of Experience </p>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="counter_box">
                  <div className="counter_hed">
                    {counterOn && (
                      <CountUp start={0} end={120} duration={2} delay={0} />
                    )}{" "}
                    +{" "}
                  </div>
                  <p>Clients Testimonial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
