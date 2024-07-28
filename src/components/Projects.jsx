import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";
import Chip from "./Chip";

function Projects() {
  const { projects } = CV_DATA;

  return (
    <Section>
      <Title text={projects.title} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {projects.data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 border border-slate-200 rounded-md p-3"
            >
              <FlexTitle text={item.title} link={item.linkUrl} />
              <Text text={item.desc} size="xs" />
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

export default Projects;
