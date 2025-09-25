import "./styles/Footer.scss";
import Button from "../common/Button";
import Overlay from "../common/Overlay";
import { ReactComponent as Loading } from "../../assets/svg/arrow-repeat.svg";
import { useState } from "react";

export default function Footer() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setContent(null);
  };

  const handleSubmit = async () => {
    setLoading(true);

    await setTimeout(() => {
      setContent(<Overlay success onClose={handleClose} />);
      setLoading(false);
    }, 5000);
  };

  const handleForm = function (e) {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <section className="footer">
      <aside className="footer_left">
        <div>
          <p className="sign-up_label">
            Sign up to receive our updates, or to stay up to date on
            informations about our academy
          </p>

          <form onSubmit={handleForm} className="footer_form">
            <div>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="email" placeholder="Email" />
            </div>

            <Button type="submit" className="btn-form">
              {loading ? (
                <span className="loading">
                  <Loading />
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>

        <span>
          © 2025 Chrone Academy of Marketing Professionals. All Rights
          Reserved.
        </span>
      </aside>

      <aside className="footer_right">
        <div>
          <span>Email</span>
          <p>campafrica@chronecompany.org</p>
        </div>

        <div>
          <span>Address</span>
          <p>Lagos, Nigeria</p>
        </div>
      </aside>

      {content}
    </section>
  );
}
