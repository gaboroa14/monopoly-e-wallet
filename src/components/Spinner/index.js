import { JellyfishSpinner } from "react-spinners-kit";

const Spinner = ({ isLoading }) => (
  <div
    className="box is-centered has-text-centered"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100,
      visibility: isLoading ? "visible" : "hidden",
    }}
  >
    <JellyfishSpinner loading={isLoading} color="#7E0000" />
  </div>
);

export default Spinner;
