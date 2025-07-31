import { string } from "prop-types";
import { ExternalLink } from "./icons";

function FlexTitle({ text, rightText, link, job }) {
  return (
    <div className="flex gap-1 justify-between items-center">
      {link !== null ? (
        <h3 className="flex items-center gap-1 w-max text-base font-semibold leading-none">
          <a target="_blank" href={link} className="flex items-center gap-1 hover:underline underline-offset-2">
            {text}
            <ExternalLink className="w-3 text-gray-400 print:hidden" />
          </a>
          {job && <span className="text-base leading-none">· {job}</span>}
        </h3>
      ) : (
        <h3 className="w-max text-base font-semibold leading-none">{text}</h3>
      )}
      {rightText && <p className="text-xs tabular-nums text-gray-500">{rightText}</p>}
    </div>
  );
}

FlexTitle.propTypes = {
  text: string,
  rightText: string,
  link: string,
  job: string
};

FlexTitle.defaultProps = {
  text: "",
  rightText: "",
  link: null,
  job: ""
};

export default FlexTitle;
