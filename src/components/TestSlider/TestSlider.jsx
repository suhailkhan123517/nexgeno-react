import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { testimonialReview } from "../../utils/Database";

export default function TestSlider() {
  return (
    <>
      <div className="testslider">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="common-heading text-center mt-5">
                <span className=""># OUR TESTIMONIAL</span>
                <h2>Clients Happy with Our IT Solutions.</h2>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialReview.map((item) => (
            <SwiperSlide>
              <div className="itemsSlider">
                <p>{item.des}</p>
                <h6>{item.name}</h6>
                <div className="rating_star d-flex justify-content-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
