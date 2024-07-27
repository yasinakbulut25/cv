import { string } from "prop-types";

function Chip({ text }) {
  return (
    <span className="text-[10px] py-1 px-2 bg-gray-100 text-gray-600 rounded w-max">
      {text}
    </span>
  );
}

Chip.propTypes = {
  text: string,
};

Chip.defaultProps = {
  text: "",
};

export default Chip;
