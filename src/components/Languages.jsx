/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";

function Languages({ lang }) {
  const { languages } = CV_DATA[lang];

  return (
    <Section>
      <Title text={languages.title} />
      <div className="flex flex-col gap-1">
        {languages.data.map((item, index) => (
          <p
            key={index}
            className="text-base print:text-[13px]"
            style={{ color: "#1f2937", fontWeight: "300" }}
          >
            {item.name} - {item.level}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Languages;
