import "swiper/css";
import "./styles/Accelerate.scss";

import AccelerateImg1 from "../../assets/images/accelerate-1.jpg";
import AccelerateImg2 from "../../assets/images/accelerate-2.jpg";
import AccelerateImg3 from "../../assets/images/accelerate-3.jpg";
import AccelerateImg4 from "../../assets/images/accelerate-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Accelerate({ idSection }) {
  const accelerate = [
    {
      image: AccelerateImg1,
      header: "Job-Ready Skills",
      desc: "Build practical marketing expertise that prepares you to step confidently into real roles and opportunities.",
    },
    {
      image: AccelerateImg2,
      header: "Campaign Mastery",
      desc: "Learn how to design, launch, and measure campaigns built for African markets and audiences.",
    },
    {
      image: AccelerateImg3,
      header: "A Growing Community",
      desc: "Join a vibrant network of marketers, peers, and leaders shaping the future of African marketing.",
    },
    {
      image: AccelerateImg4,
      header: "Exclusive Access",
      desc: "Build practical marketing expertise that prepares you to step confidently into real roles and opportunities.",
    },
  ];

  const renderSlides = accelerate.map((acc, index) => (
    <SwiperSlide key={index} className="accelerate_item">
      <div className="accelerate_item_img">
        <img src={acc.image} alt="Accelerate__Image" />
      </div>

      <div className="accelerate_item_desc">
        <h5>{acc.header}</h5>
        <p>{acc.desc}</p>
      </div>
    </SwiperSlide>
  ));

  const renderSlidesMobile = accelerate.map((acc, index) => (
    <div key={index} className="accelerate_item">
      <div className="accelerate_item_img">
        <img src={acc.image} alt="Accelerate__Image" />
      </div>

      <div className="accelerate_item_desc">
        <h5>{acc.header}</h5>
        <p>{acc.desc}</p>
      </div>
    </div>
  ));

  return (
    <section id={idSection} className="accelerate">
      <aside className="accelerate_header">
        <p className="inter">WHAT WE OFFER</p>

        <h2>Accelerate Your Marketing Career</h2>
      </aside>

      <aside className="accelerate_bottom">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 1.8,
            },
            768: {
              slidesPerView: 2.8,
            },
            990: {
              slidesPerView: 3.3,
            },
          }}
          spaceBetween={"24px"}
          className="accelerate_list"
        >
          {renderSlides}
        </Swiper>
      </aside>

      <aside className="accelerate_mobile">
        <div className="accelerate_list">{renderSlidesMobile}</div>
      </aside>
    </section>
  );
}
