import "./styles/GetStartedForm.scss";
import Button from "../common/Button";
import Overlay from "../common/Overlay";

export default function GetStartedForm() {
  return (
    <section className="get-started">
      <h2>Get Started</h2>

      <form className="overall_form">
        <aside className="form_aside">
          <p>Personal Information</p>

          <div className="form_container">
            <div className="form_item_two">
              <div>
                <label>First name</label>
                <input type="text" placeholder="Enter first name" />
              </div>

              <div>
                <label>Last name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>

            <div className="form_item">
              <label>Email Address</label>
              <input type="email" placeholder="Enter Email Address" />
            </div>

            <div className="form_item">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter Phone Number" />
            </div>

            <div className="form_item">
              <label htmlFor="age">Age</label>
              <select id="age" name="Select Age">
                <option value="usa">16-25</option>
                <option value="canada">26-35</option>
                <option value="mexico">36-35</option>
                <option value="uk">36-45</option>
                <option value="uk">46+</option>
              </select>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Educational Background</p>

          <div className="form_container">
            <div className="form_item">
              <label htmlFor="degree">Highest Degree / Qualification</label>

              <select id="degree" name="Select Age">
                <option value="usa">Primary</option>
                <option value="canada">Secondary</option>
                <option value="mexico">Tetairy</option>
              </select>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Professional Background</p>

          <div className="form_container">
            <div className="form_item">
              <label>Current Role</label>
              <input type="text" placeholder="Enter Current Role" />
            </div>

            <div className="form_item">
              <label htmlFor="experience">Previous Work Experience</label>
              <textarea
                id="experience"
                placeholder="Brief description of relevant experience"
              ></textarea>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Motivation & Vision</p>

          <div className="form_container">
            <div className="form_item">
              <label htmlFor="experience">
                Why do you want to join Chrone Academy?
              </label>
              <textarea
                id="experience"
                placeholder="Explain your motivation for joining"
              ></textarea>
            </div>

            <div className="form_item">
              <label htmlFor="experience">
                Where do you see yourself in 1–3 years?
              </label>
              <textarea
                id="experience"
                placeholder={`Share your goals for the next 1-3 years`}
              ></textarea>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Skills & Interests</p>

          <div className="form_container">
            <div className="form_item">
              <label>Key Skills / Areas of Expertise</label>
              <input
                type="text"
                placeholder="List your key skills or expertise areas"
              />
            </div>

            <div className="form_item">
              <label>
                Areas of Interest in Business / Marketing / Entrepreneurship
              </label>
              <input
                type="number"
                placeholder="Enter your main areas of interest"
              />
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>
            Online Presence <span>Optional</span>
          </p>

          <div className="form_container">
            <div className="form_item">
              <label>LinkedIn </label>
              <input
                type="text"
                placeholder="Enter your LinkedIn profile link"
              />
            </div>

            <div className="form_item">
              <label>Instagram</label>
              <input
                type="text"
                placeholder="Enter your Instagram handle or link"
              />
            </div>

            <div className="form_item">
              <label>Twitter</label>
              <input
                type="text"
                placeholder="Enter your Twitter handle or link"
              />
            </div>

            <div className="form_item">
              <label>Tiktok</label>
              <input
                type="text"
                placeholder="Enter your Tiktok handle or link"
              />
            </div>

            <div className="form_item">
              <label>Personal Website / Portfolio</label>
              <input
                type="text"
                placeholder="Enter your website or portfolio link"
              />
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>
            Achievements & Recognition <span>Optional</span>
          </p>

          <div className="form_container">
            <div className="form_item">
              <label>
                Any awards, recognitions, or notable milestones you’ve achieved
              </label>
              <input
                type="text"
                placeholder="Enter your awards, recognitions, or milestones"
              />
            </div>
          </div>
        </aside>

        <Button type="submit">Submit</Button>
      </form>

      {/* <Overlay /> */}
    </section>
  );
}
