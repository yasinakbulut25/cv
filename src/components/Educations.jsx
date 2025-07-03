/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";

function Educations({ lang }) {
  const { educations } = CV_DATA[lang];

  return (
    <Section>
      <Title text={educations.title} />
      <div className="flex flex-col gap-4">
        {educations.data.map((item, index) => {
          const rightContent = `${item.startDate} - ${item.endDate}`;
          return (
            <div key={index} className="flex flex-col gap-2">
              <FlexTitle text={item.title} rightText={rightContent} />
              <Text text={item.desc} size="sm" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Educations;
