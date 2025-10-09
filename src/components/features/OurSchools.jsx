import "./styles/OurSchools.scss";

import SchoolImg1 from "../../assets/images/schools-1.jpg";
import SchoolImg2 from "../../assets/images/schools-2.jpg";
import SchoolImg3 from "../../assets/images/schools-3.jpg";
import { useState } from "react";

export default function OurSchools({ idSection }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const schools = [
    {
      image: SchoolImg1,
      header: "School of Growth Marketing",
      text: "Master the science of performance marketing. From funnels to paid media and analytics, you’ll learn how to drive measurable growth for brands.",
    },
    {
      image: SchoolImg2,
      header: "School of Strategy & Operations",
      text: "Craft stories that connect. Explore brand storytelling, social media, and content-driven commerce to build influence and lasting engagement.",
    },
    {
      image: SchoolImg3,
      header: "School of Storytelling & Content",
      text: "Learn how to run marketing like a system. From campaign management to marketing ops, you’ll gain the skills to keep strategies sharp and scalable.",
    },
  ];

  const handleActiveSlide = (slide) => {
    setActiveSlide(slide);
  };

  const renderSchools = schools.map((school, index) => {
    const activeClass = activeSlide === index ? "active" : "";

    return (
      <div
        onClick={() => handleActiveSlide(index)}
        className={`our-schools_item ${activeClass}`}
        key={index}
      >
        <h4>{school.header}</h4>
        <p>{school.text}</p>
      </div>
    );
  });

  const renderImages = schools.map((school, index) => (
    <img
      className={`${activeSlide === index ? "active" : ""}`}
      key={index}
      src={school.image}
    />
  ));

  const renderMobileItems = schools.map((school, index) => {
    return (
      <div className={`our_schools_item_mobile`} key={index}>
        <div className="our_schools_item_img">
          <img
            className={`${activeSlide === index ? "active" : ""}`}
            src={school.image}
          />
        </div>

        <div className="our_schools_item_desc">
          <h4>{school.header}</h4>
          <p>{school.text}</p>
        </div>
      </div>
    );
  });

  return (
    <section id={idSection} className="our-schools">
      <aside className="our-schools_header">
        <p className="inter">Our Schools</p>
        <h2>
          Your Journey,
          <br /> Your Track
        </h2>
      </aside>

      <aside className="our-schools_desc">
        <div className="our-schools_list">{renderSchools}</div>

        <div className="our-schools_img">{renderImages}</div>
      </aside>

      <aside className="our_schools_mobile_list">{renderMobileItems}</aside>
    </section>
  );
}
