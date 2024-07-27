import { string } from "prop-types";

function SubTitle({ text }) {
  return (
    <h4 className="font-mono text-sm leading-none print:text-[12px]">{text}</h4>
  );
}

SubTitle.propTypes = {
  text: string,
};

SubTitle.defaultProps = {
  text: "",
};

export default SubTitle;
