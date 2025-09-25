import "./styles/Overlay.scss";

import Button from "./Button";

import { useEffect } from "react";

export default function Overlay() {
  //   const { isModalHidden, setIsModalHiddenStatus, isSuccess, errorMessage } =
  //     useFormDataContext();

  useEffect(() => {
    const removeOverlay = function (e) {
      e.preventDefault();
      if (e.target.classList.contains("popup")) return;

      //   setIsModalHiddenStatus(true);
    };

    document.addEventListener("click", removeOverlay);

    return () => document.removeEventListener("click", removeOverlay);
  }, []);

  const handleClose = () => {
    // setIsModalHiddenStatus((prev) => (prev ? false : !prev));
  };

  return (
    <section className={`overlay`}>
      <div className="popup">
        {/* {isSuccess ? <Success /> : <Failed />} */}

        <h3>
          Submission Successful
          {/* {isSuccess ? "Email Added Successfully" : "Invalid Email Address"} */}
        </h3>

        <p>
          Thank you for completing your application to Chrone Academy. Our team
          will carefully review your submission and get back to you shortly with
          the next steps.
          {/* {isSuccess
            ? "You’re in! Stay tuned for Ventarca’s launch and enjoy 3 months free as our thank you."
            : errorMessage} */}
        </p>

        <Button onClick={() => handleClose()} className="close">
          Return Home
        </Button>
      </div>
    </section>
  );
}
