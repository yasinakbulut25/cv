/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";

function Educations({ lang }) {
  const { educations } = CV_DATA[lang];

  return (
    <Section>
      <Title text={educations.title} />
      <div className="flex flex-col gap-3">
        {educations.data.map((item, index) => (
          <div key={index}>
            <p
              className="text-base print:text-[13px]"
              style={{ color: "#1f2937", fontWeight: "300" }}
            >
              {item.title}
              {item.desc ? ` - ${item.desc}` : ""}
            </p>
            <p className="text-xs tabular-nums text-gray-500 print:text-gray-700">
              {item.startDate} - {item.endDate}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Educations;
