import { string } from "prop-types";

function Title({ text }) {
  return <h2 className="text-xl font-bold">{text}</h2>;
}

Title.propTypes = {
  text: string,
};

Title.defaultProps = {
  text: "",
};

export default Title;
