import React from "react";

const Successtories = () => {
  return (
    <div>
      <section class="success-stories mb-lg-5 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="common-heading text-center pb-lg-5 pb-3">
                <h2 class="pb-2 color_white">Success Stories</h2>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pe-5 ps-2 pb-4 pb-lg-0">
                <a
                  class="hover-animation"
                  target="_blank"
                  href="https://www.lawtendo.com/"
                >
                  <div>
                    <img
                      class="img-fluid"
                      src="/images/lawtendo_stories.jpg"
                      alt=""
                    />
                    <img
                      class="hoverImages img-fluid"
                      src="/images/lawtendo_mobile_stories.jpg"
                      alt=""
                    />
                  </div>
                  <div class="item-title ">
                    <h3 class="hover-underline-animation">Lawtendo</h3>
                  </div>
                  <p className="text-white">Website / Web Development</p>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pe-5 ps-2 pb-4 pb-lg-0">
                <a
                  class="hover-animation"
                  target="_blank"
                  href="https://geci.co.in/"
                >
                  <div>
                    <img
                      class="img-fluid "
                      src="/images/gecir_stories.jpg"
                      alt=""
                    />
                    <img
                      class="hoverImages img-fluid"
                      src="/images/gcie_mobile_stories.jpg"
                      alt=""
                    />
                  </div>
                  <div class="item-title">
                    <h3 class="hover-underline-animation">Gecindia</h3>
                  </div>
                  <p className="text-white">Website / Web Development</p>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pe-5 ps-2 pb-lg-0">
                <a
                  class="hover-animation"
                  target="_blank"
                  href="https://octanetworks.com/"
                >
                  <div>
                    <img
                      class="img-fluid"
                      src="/images/octa_stories.jpg"
                      alt=""
                    />
                    <img
                      class="hoverImages img-fluid"
                      src="/images/octa_mobile_stories.jpg"
                      alt=""
                    />
                  </div>
                  <div class="item-title ">
                    <h3 class="hover-underline-animation">Octa Networks</h3>
                  </div>
                  <p className="text-white">Website / Web Development</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Successtories;
