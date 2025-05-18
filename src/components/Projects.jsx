/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";
import Chip from "./Chip";

function Projects({ lang }) {
  const { projects } = CV_DATA[lang];

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
              <div className="flex gap-2 mt-1 items-center">
                <div className="flex flex-col gap-1">
                  <a href={item.linkUrl} className="relative inline-block w-max text-pretty font-mono text-xs text-gray-500 print:text-gray-800 print:text-[12px]">
                    <i>{item.linkText}</i>
                  </a>
                  {item.linkText2 && <a href={item.linkUrl2} className="relative inline-block w-max text-pretty font-mono text-xs text-gray-500 print:text-gray-800 print:text-[12px]">
                    <i>{item.linkText2}</i>
                    </a>}
                </div>
                {item.technologies?.length > 0 && (
                  <div className="inline-flex flex-wrap gap-2">
                  {item.technologies?.map((tech, index) => (
                    <Chip key={index} text={tech} />
                  ))}
                </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-pretty font-mono text-xs print:text-[12px]">
        <span className="text-gray-500 print:text-gray-800">
          {lang === "en" ? "For more projects, you can visit my personal portfolio: " : "Daha fazla proje için kişisel portföyümü ziyaret edebilirsiniz: "}
        </span>
        <a style={{ color: "#2b7fff"}} className='text-blue-400 hover:underline' href='https://yasinakbulut.dev' target='_blank'>yasinakbulut.dev</a>
      </p>
    </Section>
  );
}

export default Projects;
