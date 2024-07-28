import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import Chip from "./Chip";

function Skills() {
  const { skills } = CV_DATA;

  return (
    <Section>
      <Title text={skills.title} />
      <div className="flex flex-wrap gap-2">
        {skills.data.map((item, index) => {
          return <Chip key={index} text={item} size='xs' />;
        })}
      </div>
    </Section>
  );
}

export default Skills;
