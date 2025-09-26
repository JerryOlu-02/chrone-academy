import "./styles/WhyCamp.scss";
import WhyCampImg from "../../assets/images/why-camp-img.jpg";
import WhyCampImgMobile from "../../assets/images/why-camp-img-mobile.jpg";

export default function WhyCamp({ idSection }) {
  return (
    <section id={idSection} className="why_camp">
      <aside className="why_camp__description">
        <p className="text inter">WHY CAMP?</p>

        <div>
          <h2>
            More Than Theory.
            <br /> Real Marketing.
          </h2>

          <p>
            At CAMP, we go beyond lectures and slides. We open up the same
            playbook that has powered Africa’s leading brands, sharing how
            strategy, storytelling, and scaling truly come together in the real
            world.
          </p>
        </div>
      </aside>

      <aside className="why_camp__img">
        <img className="desktop" src={WhyCampImg} alt="why__camp-image" />
        <img
          className="mobile"
          src={WhyCampImgMobile}
          alt="why__camp-image-mobile"
        />
      </aside>

      <aside className="why_camp__list">
        <div className="why_camp__item">
          <h4>Learn Proven Strategies</h4>

          <div className="hr-line"></div>

          <p>
            Discover the exact strategies that turned startups into market
            leaders. You’ll learn what really works in Africa’s fast-moving
            business landscape.
          </p>
        </div>

        <div className="why_camp__item">
          <h4>Work on Real Projects</h4>

          <div className="hr-line"></div>

          <p>
            No boring assignments. You’ll dive into real projects that sharpen
            your skills and prepare you for the challenges marketers face every
            day.
          </p>
        </div>

        <div className="why_camp__item">
          <h4>Learn Proven Strategies</h4>

          <div className="hr-line"></div>

          <p>
            Walk away with more than knowledge. You’ll have a polished portfolio
            that shows employers and clients the value you can bring from day
            one.
          </p>
        </div>
      </aside>
    </section>
  );
}
