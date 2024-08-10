import { string } from "prop-types";

function Text({ text, size }) {
  return (
    <p
      className={`text-pretty font-mono text-${size} text-gray-5000 print:text-gray-800 print:text-[12px]`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

Text.propTypes = {
  text: string,
  size: string,
};

Text.defaultProps = {
  text: "",
  size: "sm",
};

export default Text;
