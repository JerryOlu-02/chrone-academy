import "./styles/Button.scss";

export default function Button({ props, children, className }) {
  return (
    <button {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
}
