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
        {experiences.data.map((exp, index) => {
          const rightContent = `${exp.startDate} - ${exp.endDate}`;
          return (
            <div key={index} className="flex flex-col gap-2">
              <FlexTitle
                text={exp.company}
                link={exp.companyLink}
                rightText={rightContent}
              />
              <SubTitle text={exp.job} />
              <Text text={exp.jobDesc} size="xs" />
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
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
