import { useLocation } from "react-router";
import Accelerate from "../components/features/Accelerate";
import Blueprint from "../components/features/Blueprint";
import Brands from "../components/features/Brands";
import Cohort from "../components/features/Cohort";
import Hero from "../components/features/Hero";
import OurSchools from "../components/features/OurSchools";
import StartBuilding from "../components/features/StartBuilding";
import WhyCamp from "../components/features/WhyCamp";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";

export default function HomePage() {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    if (targetId) {
      console.log(targetId);
      const el = document.getElementById(targetId);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" }); // Optional: smooth scrolling
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [targetId]);

  return (
    <>
      <Hero />

      <WhyCamp idSection={"section-2"} />

      <OurSchools idSection={"section-1"} />

      <Brands />

      <Blueprint idSection={"section-3"} />

      <Accelerate idSection={"section-4"} />

      <Cohort />

      <StartBuilding />

      <Footer />
    </>
  );
}
