import PropTypes from "prop-types";

function Section({ children }) {
  return <section className="flex flex-col gap-3">{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
