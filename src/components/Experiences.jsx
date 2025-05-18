/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";
import Chip from "./Chip";

function Experiences({ lang }) {
  const { experiences } = CV_DATA[lang];
  const jfJobs = experiences.data.filter(j => j.company === "Jotform");
  return (
    <Section>
      <Title text={experiences.title} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <FlexTitle
              text={jfJobs[0].company}
              link={jfJobs[0].companyLink}
            />
            {jfJobs.map((item, index) => {
              const rightContent = `${item.startDate} - ${item.endDate}`;
              return (
                <div key={index}  className="relative" style={{ marginLeft: "24px"}}>
                  <div className="flex gap-1 justify-between items-center">
                      <h3 className="w-max text-sm font-semibold leading-none">· {item.job}</h3>
                      <p className="text-xs tabular-nums text-gray-500">{rightContent}</p>
                  </div>
                  {/* <SubTitle text={item.job} /> */}
                  <Text text={item.jobDesc} size="xs" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech, index) => (
                      <Chip key={index} text={tech} />
                    ))}
                  </div>
                </div>
              )})}
          </div>
        {experiences.data.map((item, index) => {
          const rightContent = `${item.startDate} - ${item.endDate}`;
          if (item.company === "Jotform") {
            return null;
          }
          return (
            <div key={index} className="flex flex-col gap-2">
              <FlexTitle
                text={item.company}
                link={item.companyLink}
                rightText={rightContent}
                job={item.job}
              />
              {/* <SubTitle text={item.job} /> */}
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
