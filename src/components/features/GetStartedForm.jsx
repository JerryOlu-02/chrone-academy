import "./styles/GetStartedForm.scss";
import Button from "../common/Button";
import Overlay from "../common/Overlay";
import { ReactComponent as Loading } from "../../assets/svg/arrow-repeat.svg";

import PostFormData from "../../helpers/postFormData";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useNavigate } from "react-router";

export default function GetStartedForm() {
  const navigate = useNavigate();

  // Modal Render
  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(false);

  // Hide Modal
  const handleClose = function () {
    setContent(null);
    navigate("/");
  };

  // Yup Validiation scheme
  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.string().required(),
    education: yup.string().required(),
    role: yup.string().required(),
    experience: yup.string().required(),
    motivation: yup.string().required(),
    vision: yup.string().required(),
    skills: yup.string().required(),
    interest: yup.string().required(),
    // companyName: yup.string().required(),
    // website: yup.string().url().required(),
  });

  // React hook form (form control)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async function (data) {
    // console.log(data);
    setLoading(true);

    try {
      const status = await PostFormData("mkgqgjpy", data);

      if (status === 200) {
        setLoading(false);

        // Show Modal
        setContent(<Overlay success onClose={handleClose} />);
      }

      reset();

      // Remove Modal after 5 seconds
      // setTimeout(() => {
      //   setContent(null);
      // }, 10000);
    } catch (error) {
      setLoading(false);

      // Show Modal
      setContent(<Overlay message={error.message} onClose={handleClose} />);

      // Clear form inputs
      reset();

      // Remove modal after 5 seconds
      setTimeout(() => {
        setContent(null);
      }, 10000);
    }
  };

  return (
    <section className="get-started">
      <h2>Get Started</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="overall_form">
        <aside className="form_aside">
          <p>Personal Information</p>

          <div className="form_container">
            <div className="form_item_two">
              <div>
                <label>First name</label>
                {errors.firstName?.message && (
                  <label>{errors.firstName.message}</label>
                )}
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label>Last name</label>
                {errors.lastName?.message && (
                  <label>{errors.lastName.message}</label>
                )}
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="form_item">
              <label>Email Address</label>
              {errors.email?.message && <label>{errors.email.message}</label>}

              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="form_item">
              <label>Phone Number</label>
              {errors.phoneNumber?.message && (
                <label>{errors.phoneNumber.message}</label>
              )}
              <input
                {...register("phoneNumber", { required: true })}
                type="number"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="form_item">
              <label htmlFor="age">Age</label>
              {errors.age?.message && <label>{errors.age.message}</label>}
              <select
                {...register("age", { required: true })}
                id="age"
                name="Select Age"
              >
                <option value="16-25">16-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56+">56+</option>
              </select>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Educational Background</p>

          <div className="form_container">
            <div className="form_item">
              <label htmlFor="degree">Highest Degree / Qualification</label>
              {errors.education?.message && (
                <label>{errors.education.message}</label>
              )}

              <select
                {...register("education", { required: true })}
                id="degree"
                name="Select Age"
              >
                <option value="highSchool">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor's</option>
                <option value="phd">PHD</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </aside>

        <aside className="form_aside">
          <p>Professional Background</p>

          <div className="form_container">
            <div className="form_item">
              <label>Current Role</label>
              {errors.role?.message && <label>{errors.role.message}</label>}

              <input
                {...register("role", { required: true })}
                type="text"
                placeholder="Enter Current Role"
              />
            </div>

            <div className="form_item">
              <label htmlFor="experience">Previous Work Experience</label>
              {errors.experience?.message && (
                <label>{errors.experience.message}</label>
              )}

              <textarea
                {...register("experience", { required: true })}
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
              <label htmlFor="motivation">
                Why do you want to join Chrone Academy?
              </label>
              {errors.motivation?.message && (
                <label>{errors.motivation.message}</label>
              )}

              <textarea
                {...register("motivation", { required: true })}
                id="motivation"
                placeholder="Explain your motivation for joining"
              ></textarea>
            </div>

            <div className="form_item">
              <label htmlFor="vision">
                Where do you see yourself in 1–3 years?
              </label>
              {errors.vision?.message && <label>{errors.vision.message}</label>}

              <textarea
                {...register("vision", { required: true })}
                id="vision"
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
              {errors.skills?.message && <label>{errors.skills.message}</label>}

              <input
                {...register("skills", { required: true })}
                type="text"
                placeholder="List your key skills or expertise areas"
              />
            </div>

            <div className="form_item">
              <label>
                Areas of Interest in Business / Marketing / Entrepreneurship
              </label>
              {errors.interest?.message && (
                <label>{errors.interest.message}</label>
              )}

              <input
                {...register("interest", { required: true })}
                type="text"
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
                {...register("linkedin")}
                type="text"
                placeholder="Enter your LinkedIn profile link"
              />
            </div>

            <div className="form_item">
              <label>Instagram</label>
              <input
                {...register("instagram")}
                type="text"
                placeholder="Enter your Instagram handle or link"
              />
            </div>

            <div className="form_item">
              <label>Twitter</label>
              <input
                {...register("twitter")}
                type="text"
                placeholder="Enter your Twitter handle or link"
              />
            </div>

            <div className="form_item">
              <label>Tiktok</label>
              <input
                {...register("tiktok")}
                type="text"
                placeholder="Enter your Tiktok handle or link"
              />
            </div>

            <div className="form_item">
              <label>Personal Website / Portfolio</label>
              <input
                {...register("website")}
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
                {...register("achievements")}
                type="text"
                placeholder="Enter your awards, recognitions, or milestones"
              />
            </div>
          </div>
        </aside>

        <Button>
          {loading ? (
            <span className="loading">
              <Loading />
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>

      {content}
    </section>
  );
}
