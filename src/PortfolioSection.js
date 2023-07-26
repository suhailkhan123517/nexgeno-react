import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  return (
    <>
      <div>
        <section class="project-section alternate">
          <div class="carousel-outer ps-lg-4 pe-lg-4 ps-md-4 pe-md-4 ps-3 pe-3">
            <div class="col-md-12">
              <div class="common-heading text-center">
                {" "}
                <span> # RECENTLY COMPLETED WORK</span>
                <h2 class="mb30">Improve & Enhance the Tech Projects</h2>{" "}
              </div>
            </div>
            <div class="project-carousel">
              <div class="owl-item active">
                <div class="row">
                  <div class="col-md-3">
                    <div class="project-block">
                      <div class="inner-box">
                        <div class="image-box">
                          <figure class="image">
                            <a
                              target="_blank"
                              href="https://www.lawtendo.com/"
                              class="lightbox-image"
                            >
                              <img src="images/lawtendo_images.jpg" alt="" />
                            </a>
                          </figure>
                          <a href="https://www.lawtendo.com/" class="icon">
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                        <div class="content-box">
                          <h4 class="title">
                            <a href="https://www.lawtendo.com/">Lawtendo</a>
                          </h4>
                          <span class="cat">Portlal / CodeIgniter</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="project-block">
                      <div class="inner-box">
                        <div class="image-box">
                          <figure class="image">
                            <a
                              target="_blank"
                              href="https://geci.co.in/"
                              class="lightbox-image"
                            >
                              <img src="images/geci_images.jpg" alt="" />
                            </a>
                          </figure>
                          <a href="https://geci.co.in/" class="icon">
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                        <div class="content-box">
                          <h4 class="title">
                            <a target="_blank" href="https://geci.co.in/">
                              Gecindia
                            </a>
                          </h4>
                          <span class="cat">Events / Wordpress</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="project-block">
                      <div class="inner-box">
                        <div class="image-box">
                          <figure class="image">
                            <a
                              target="_blank"
                              href="https://octanetworks.com/"
                              class="lightbox-image"
                            >
                              <img src="images/octa_images.jpg" alt="" />
                            </a>
                          </figure>
                          <a href="https://octanetworks.com/" class="icon">
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                        <div class="content-box">
                          <h4 class="title">
                            <a href="https://octanetworks.com/">
                              Octa Networks
                            </a>
                          </h4>
                          <span class="cat">Education / Yii Framework</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="project-block">
                      <div class="inner-box">
                        <div class="image-box">
                          <figure class="image">
                            <a
                              href="https://cancrijewells.com/"
                              class="lightbox-image"
                            >
                              <img
                                src="images/cancari_jwellers_homepage.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                          <a href="https://cancrijewells.com/" class="icon">
                            <i class="fa fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                        <div class="content-box">
                          <h4 class="title">
                            <a href="https://cancrijewells.com/">
                              Cancri Jewells
                            </a>
                          </h4>
                          <span class="cat">E-commerce / CodeIgniter</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioSection;
