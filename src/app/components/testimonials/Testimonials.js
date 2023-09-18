'use client'
import React from "react";
// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "swiper/css";
import "./testimonials.css";
import "swiper/css/pagination";
const { Pagination } = dynamic(() => import('swiper'), {
  suspense: true,
})
const { Swiper, SwiperSlide } = dynamic(() => import('swiper/react'), {
  suspense: true,
})
const data = [
  {
    avatar: AVTR1,
    name: "Álex Pina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor assumenda fugit quasi nam magnam necessitatibus consequuntur tempora animi. Nostrum culpa est, odit esse inventore minus ex quis unde a!",
  },
  {
    avatar: AVTR2,
    name: "Matt Duffer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor assumenda fugit quasi nam magnam necessitatibus consequuntur tempora animi. Nostrum culpa est, odit esse inventore minus ex quis unde a!",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor assumenda fugit quasi nam magnam necessitatibus consequuntur tempora animi. Nostrum culpa est, odit esse inventore minus ex quis unde a!",
  },
  {
    avatar: AVTR4,
    name: "Tina Show",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor assumenda fugit quasi nam magnam necessitatibus consequuntur tempora animi. Nostrum culpa est, odit esse inventore minus ex quis unde a!",
  },
];
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonialsContainer"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="clientAvatar">
                <img src={avatar} alt="Client Avatar" />
              </div>
              <h5 className="clientName">{name}</h5>
              <small className="clientReview">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
