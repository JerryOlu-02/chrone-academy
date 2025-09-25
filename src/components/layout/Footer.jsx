import "./styles/Footer.scss";
import Button from "../common/Button";

export default function Footer() {
  return (
    <section className="footer">
      <aside className="footer_left">
        <div>
          <p className="sign-up_label">
            Sign up to receive our updates, or to stay up to date on
            informations about our academy
          </p>

          <form className="footer_form">
            <div>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="email" placeholder="Email" />
            </div>

            <Button type="submit" className="btn-form">
              Submit
            </Button>
          </form>
        </div>

        <span>
          © 2025 Chrone Academy of Marketing Professionals. All Rights Reserved.
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
    </section>
  );
}
