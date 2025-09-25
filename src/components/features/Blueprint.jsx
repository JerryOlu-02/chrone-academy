import "./styles/Blueprint.scss";
import BlueprintImg1 from "../../assets/images/blueprint-1.jpg";
import BlueprintImg2 from "../../assets/images/blueprint-2.jpg";
import BlueprintImg3 from "../../assets/images/blueprint-3.jpg";

export default function Blueprint({ idSection }) {
  const blueprints = [
    {
      image: BlueprintImg1,
      header: "Apply Now",
      desc: "Fill out a simple application to claim your spot in the free beta cohort. Since slots are limited, applying early gives you the best chance to secure your place.",
    },
    {
      image: BlueprintImg2,
      header: "Get Access",
      desc: "Once accepted, you’ll join live classes led by Africa’s top marketing minds. You’ll also work on real projects, connect with peers, and be part of an active learning community.",
    },
    {
      image: BlueprintImg3,
      header: "Graduate Ready",
      desc: "You’ll complete the program with real projects, a recognized certificate, and the skills to stand out with confidence to employers, clients, and partners.",
    },
  ];

  const renderBlueprints = blueprints.map((blueprint, index) => (
    <div key={index} className="blueprint_item">
      <div className="blueprint_item_desc">
        <p>STEP {index + 1}</p>

        <div>
          <h5>{blueprint.header}</h5>
          <p>{blueprint.desc}</p>
        </div>
      </div>

      <div className="blueprint_item_img">
        <img src={blueprint.image} alt="Blueprint__image" />
      </div>
    </div>
  ));

  return (
    <section id={idSection} className="blueprint">
      <aside className="blueprint_header">
        <p className="inter">How It Works</p>

        <h2>
          Your CAMP
          <br /> Blueprint
        </h2>
      </aside>

      <aside className="blueprint_list">{renderBlueprints}</aside>
    </section>
  );
}
