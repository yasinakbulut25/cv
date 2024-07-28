import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";
import Chip from "./Chip";

function Projects() {
  const { projects } = CV_DATA;
  const footerText = `
    For more projects, you can visit my personal portfolio: 
    <a class='hover:underline' href='https://yasinakbulut.dev' target='_blank'>yasinakbulut.dev</a>
  `;
  return (
    <Section className="print-force-new-page print:pt-16">
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
      <Text text={footerText} size="xs" />
    </Section>
  );
}

export default Projects;
