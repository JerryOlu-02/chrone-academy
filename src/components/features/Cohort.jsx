import "swiper/css";
import "./styles/Cohort.scss";

import { ReactComponent as Arrow } from "../../assets/svg/arrow-right.svg";
import Button from "../common/Button";

import CohortImg1 from "../../assets/images/cohort-1.jpg";
import CohortImg2 from "../../assets/images/cohort-2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { NavLink } from "react-router";

export default function Cohort() {
  const cohorts = [
    {
      image: CohortImg1,
      header: "Applications Close",
      time: "November 19th, 2025",
    },
    {
      image: CohortImg2,
      header: "Cohort Begins",
      time: "April 2026",
    },
  ];

  const renderSlides = cohorts.map((acc, index) => (
    <SwiperSlide key={index} className="cohort_item">
      <div className="cohort_item_img">
        <img src={acc.image} alt="Accelerate__Image" />
      </div>

      <div className="cohort_item_desc">
        <h5>{acc.header}</h5>
        <p>{acc.time}</p>
      </div>
    </SwiperSlide>
  ));

  const renderSlidesMobile = cohorts.map((acc, index) => (
    <div key={index} className="cohort_item">
      <div className="cohort_item_img">
        <img src={acc.image} alt="Accelerate__Image" />
      </div>

      <div className="cohort_item_desc">
        <h5>{acc.header}</h5>
        <p>{acc.time}</p>
      </div>
    </div>
  ));

  return (
    <section className="cohort">
      <aside className="cohort_header">
        <h5 className="inter">Limited Free Cohort</h5>

        <div>
          <h2>
            Be Part of CAMP’s
            <br /> First Cohort
          </h2>

          <p>
            CAMP is opening its doors for the very first time, and we’re
            celebrating with something special. Our very first cohort is
            completely <span>FREE</span>, but spots are extremely limited.
          </p>
        </div>

        <NavLink to="get-started">
          <Button>
            Register Now <Arrow />
          </Button>
        </NavLink>
      </aside>

      <aside className="cohort_bottom">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            990: {
              slidesPerView: 1.5,
            },
          }}
          spaceBetween={"24px"}
          className="cohort_list"
        >
          {renderSlides}
        </Swiper>
      </aside>

      <aside className="cohort_mobile">
        <div className="cohort_list">{renderSlidesMobile}</div>
      </aside>
    </section>
  );
}
