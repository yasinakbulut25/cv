import { string } from "prop-types";

function Chip({ text, size }) {
  return (
    <span
      className={`text-${size} py-1 px-2 bg-gray-100 text--600 rounded w-max`}
    >
      {text}
    </span>
  );
}

Chip.propTypes = {
  text: string,
  size: string,
};

Chip.defaultProps = {
  text: "",
  size: "[10px]",
};

export default Chip;
