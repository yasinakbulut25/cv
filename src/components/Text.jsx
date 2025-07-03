import { string } from "prop-types";

function Text({ text, size }) {
  return (
    <p
      className={`about-text text-pretty text-justify font-mono text-${size} text-gray-500 print:text-gray-800 print:text-[12px]`}
      dangerouslySetInnerHTML={{ __html: text }}
      style={{color: "#1f2937", fontWeight: "300"}}
    />
  );
}

Text.propTypes = {
  text: string,
  size: string,
};

Text.defaultProps = {
  text: "",
  size: "md",
};

export default Text;
