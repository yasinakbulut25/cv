/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import Chip from "./Chip";

function Skills({ lang }) {
  const { skills } = CV_DATA[lang];

  return (
    <Section>
      <Title text={skills.title} />
      <div className="flex flex-wrap flex-col gap-4" style={{ marginLeft: "24px" }}>
        {skills.data.map((item, index) => {
          const { title, items } = item;
          return (
            <div key={index} className="flex md:flex-row flex-col items-baseline gap-1">
              <h2 className="text-sm font-bold min-w-max">{title}:</h2>
              <div className="flex gap-1 items-center flex-wrap">
                {items.map((skill, i) => (
                  <Chip key={i} text={skill} size='xs' />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
