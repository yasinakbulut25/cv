import PropTypes, { string } from "prop-types";

function Section({ className, children }) {
  return (
    <section className={`flex flex-col gap-3 ${className}`}>{children}</section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: string,
};

export default Section;
