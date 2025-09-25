import "./styles/Overlay.scss";

import Button from "./Button";

import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Overlay({ success, message, onClose }) {
  //   const { isModalHidden, setIsModalHiddenStatus, isSuccess, errorMessage } =
  //     useFormDataContext();

  useEffect(() => {
    const removeOverlay = function (e) {
      e.preventDefault();
      if (e.target.classList.contains("popup")) return;

      onClose();
    };

    document.addEventListener("click", removeOverlay);

    return () => document.removeEventListener("click", removeOverlay);
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <section className={`overlay`}>
      <div className="popup">
        <h3>{success ? "Submission Successful" : "Invalid Email Address"}</h3>

        <p>
          {message ||
            "Thank you for completing your application to Chrone Academy. Our team will carefully review your submission and get back to you shortly with the next steps."}
        </p>

        <Button onClick={() => handleClose()} className="close">
          Return Home
        </Button>
      </div>
    </section>
  );
}
