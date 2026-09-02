/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";

function References({ lang }) {
  const { references } = CV_DATA[lang];

  return (
    <Section>
      <Title text={references.title} />
      <p
        className="text-base print:text-[13px]"
        style={{ color: "#1f2937", fontWeight: "300" }}
      >
        {references.text}
      </p>
    </Section>
  );
}

export default References;
