/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";

function References({ lang }) {
  const { references } = CV_DATA[lang];

  return (
    <Section>
      <Title text={references.title} />
      <div className="flex flex-col gap-1">
        {references.data.map((item, index) => {
          return (
            <a href={item.link} target="_blank" key={index} className="flex items-center gap-1">
              <p className="text-md text-black">{item.name} -</p>
              <p className="text-md" style={{ color: "#374151", fontWeight: "300"}}>{item.title}</p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

export default References;
