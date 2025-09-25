import "./styles/Hero.scss";

import Button from "../common/Button";
import { ReactComponent as Arrow } from "../../assets/svg/arrow-right.svg";
import BgImg from "../../assets/images/hero-bg.png";
import BgImgMobile from "../../assets/images/hero-bg-mobile.png";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_description">
        <h1>
          Africa’s Marketing
          <br /> Statpad for Professionals
        </h1>
        <p>
          Learn from Africa’s top marketers, master future-ready skills, and
          stand out to leading brands.
        </p>
      </div>

      <div className="hero_bottom">
        <NavLink to="get-started">
          <Button>
            Register Now <Arrow />
          </Button>
        </NavLink>

        <p>First Cohort Free. Limited Slots.</p>
      </div>

      <div className="bg_img">
        <img className="desktop" src={BgImg} alt="her__background" />
        <img className="mobile" src={BgImgMobile} alt="her__background" />
      </div>
    </section>
  );
}
