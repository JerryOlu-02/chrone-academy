import "swiper/css";
import "./styles/Brands.scss";
import { ReactComponent as NectarSvg } from "../../assets/svg/nectar.svg";
import { ReactComponent as BuyBetterSvg } from "../../assets/svg/buy-better.svg";
import { ReactComponent as JumiaSvg } from "../../assets/svg/jumia.svg";
import { ReactComponent as TetraSvg } from "../../assets/svg/tetra.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(useGSAP);

export default function Brands() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".brand_item");
    let sections2 = gsap.utils.toArray(".brand_item_2");

    gsap
      .to(".brand_item", {
        xPercent: -100 * (sections.length - 5),
        repeat: -1,
        duration: 22,
        ease: "linear",
      })
      .totalProgress(0);

    gsap
      .fromTo(
        ".brand_item_2",
        {
          xPercent: -100 * (sections.length - 5),
        },
        {
          xPercent: 0,
          repeat: -1,
          duration: 22,
          ease: "linear",
        }
      )
      .totalProgress(0);
  });

  const brands = [
    {
      svg: NectarSvg,
    },
    {
      svg: BuyBetterSvg,
    },
    {
      svg: JumiaSvg,
    },
    {
      svg: TetraSvg,
    },
    {
      svg: NectarSvg,
    },
    {
      svg: BuyBetterSvg,
    },
    {
      svg: JumiaSvg,
    },
    {
      svg: TetraSvg,
    },
  ];

  const renderBrands = brands.map((brand, index) => (
    <SwiperSlide key={index} className="brand_item">
      {<brand.svg />}
    </SwiperSlide>
  ));

  const renderBrands2 = brands.map((brand, index) => (
    <SwiperSlide key={index} className="brand_item_2">
      {<brand.svg />}
    </SwiperSlide>
  ));

  return (
    <section className="brands">
      <aside className="brands_header">
        <p className="inter">Trusted by Brands</p>

        <h2>Brands That Believe in Our Playbook</h2>
      </aside>

      <aside className="brands_bottom">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2.7,
            },
            640: {
              slidesPerView: 2.7,
            },
            768: {
              slidesPerView: 3.7,
            },
            990: {
              slidesPerView: 5.2,
            },
          }}
          spaceBetween={"20px"}
          className="brands_list"
        >
          {renderBrands}
        </Swiper>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2.7,
            },
            640: {
              slidesPerView: 2.7,
            },
            768: {
              slidesPerView: 3.7,
            },
            990: {
              slidesPerView: 5.2,
            },
          }}
          spaceBetween={"20px"}
          className="brands_list"
        >
          {renderBrands2}
        </Swiper>
      </aside>
    </section>
  );
}
