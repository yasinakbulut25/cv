import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";
import Chip from "./Chip";
import SubTitle from "./SubTitle";

function Experiences() {
  const { experiences } = CV_DATA;
  return (
    <Section>
      <Title text={experiences.title} />
      <div className="flex flex-col gap-4">
        {experiences.data.map((item, index) => {
          const rightContent = `${item.startDate} - ${item.endDate}`;
          return (
            <div key={index} className="flex flex-col gap-2">
              <FlexTitle
                text={item.company}
                link={item.companyLink}
                rightText={rightContent}
              />
              <SubTitle text={item.job} />
              <Text text={item.jobDesc} size="xs" />
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <Chip key={index} text={tech} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Experiences;
