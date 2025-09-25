import Button from "../common/Button";
import "./styles/Navbar.scss";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as Play } from "../../assets/svg/play.svg";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
// import useSectionContext from "../utils/useSectionContext";

export default function Navbar() {
  const navigate = useNavigate();

  //State to manage Navbar Content Visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((open) => (open ? false : true));
  };

  const activeClass = isOpen ? "open" : "";

  // Sticky event listener to handle sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  // Handle Smooth Scroll Into Section
  const handleScrollToSection = function (section) {
    navigate("/", { state: { targetId: section } });
    setIsOpen(false);
  };

  //   const { tracksRef, speakersRef, aboutRef, detailsRef } = useSectionContext();

  return (
    <nav className={`navbar ${stickyClass}`}>
      <NavLink to="/" className="logo">
        <LogoSvg />
      </NavLink>

      <div className={`nav__container ${activeClass}`}>
        <ul className={`nav__links ${activeClass}`}>
          <li onClick={() => handleScrollToSection("section-1")}>Schools</li>
          <li onClick={() => handleScrollToSection("section-2")}>Why Camp?</li>
          <li onClick={() => handleScrollToSection("section-3")}>
            How it works?
          </li>
          <li onClick={() => handleScrollToSection("section-4")}>Our Offer</li>
        </ul>
      </div>

      <aside className="nav_right_items">
        <NavLink to="get-started">
          <Button className={`btn-nav ${activeClass}`}>
            Get Started <Play />
          </Button>
        </NavLink>

        <div
          onClick={() => handleToggle()}
          className={`nav__hamburger ${activeClass}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>
    </nav>
  );
}
