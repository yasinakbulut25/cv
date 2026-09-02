/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";

function Skills({ lang }) {
  const { skills } = CV_DATA[lang];

  return (
    <Section className="print-force-new-page print:pt-8">
      <Title text={skills.title} />
      <div className="flex flex-col gap-1.5">
        {skills.data.map((item, index) => {
          const { title, items } = item;
          return (
            <p
              key={index}
              className="text-sm text-pretty print:text-[12px]"
              style={{ color: "#1f2937", fontWeight: "300" }}
            >
              <span className="font-bold">{title}: </span>
              {items}
            </p>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
