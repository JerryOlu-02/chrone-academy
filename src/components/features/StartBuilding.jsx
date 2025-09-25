import "./styles/StartBuilding.scss";

import Button from "../common/Button";
import { ReactComponent as Play } from "../../assets/svg/play.svg";
import { NavLink } from "react-router";

export default function StartBuilding() {
  return (
    <section className="start">
      <aside>
        <div>
          <h3>
            Start Building Your
            <br /> Marketing Legacy
          </h3>
          <p>Your marketing career won’t wait. Neither should you.</p>
        </div>

        <NavLink to="get-started">
          <Button className="btn-nav">
            Get Started <Play />
          </Button>
        </NavLink>
      </aside>
    </section>
  );
}
