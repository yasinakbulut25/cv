import { string } from "prop-types";

function FlexTitle({ text, rightText, link }) {
  return (
    <div className="flex gap-1 justify-between items-center">
      {link !== null ? (
        <h3 className="w-max text-base font-semibold leading-none hover:underline underline-offset-2">
          <a target="_blank" href={link}>
            {text}
          </a>
        </h3>
      ) : (
        <h3 className="w-max text-base font-semibold leading-none">{text}</h3>
      )}
      <p className="text-xs tabular-nums text-gray-500">{rightText}</p>
    </div>
  );
}

FlexTitle.propTypes = {
  text: string,
  rightText: string,
  link: string,
};

FlexTitle.defaultProps = {
  text: "",
  rightText: "",
  link: null,
};

export default FlexTitle;
