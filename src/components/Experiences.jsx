/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import FlexTitle from "./FlexTitle";
import Text from "./Text";

function Experiences({ lang }) {
  const { experiences } = CV_DATA[lang];

  const multiJobs = (jobs) => {
    return (
      <div className="flex flex-col gap-2">
        <FlexTitle text={jobs[0].company} link={jobs[0].companyLink} />
        {jobs.map((item, index) => {
          const rightContent = `${item.startDate} - ${item.endDate}`;
          return (
            <div
              key={index}
              className="relative mb-2"
              style={{ marginLeft: "24px" }}
            >
              <div className="flex gap-1 justify-between items-center">
                <h3 className="w-max text-base font-semibold leading-none mb-1">
                  · {item.job}
                </h3>
                <p className="text-xs tabular-nums text-gray-500 mb-1">
                  {rightContent}
                </p>
              </div>
              {/* <SubTitle text={item.job} /> */}
              <Text text={item.jobDesc} size="sm" />
              {/* <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologies.map((tech, index) => (
                    <Chip key={index} text={tech} />
                  ))}
                </div> */}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <Section>
      <Title text={experiences.title} />
      <div className="flex flex-col gap-4">
        {experiences.data.map((item, index) => {
          const rightContent = `${item.startDate} - ${item.endDate}`;
          if (item.hasMulti) {
            return multiJobs(item.jobs);
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
              <Text text={item.jobDesc} size="sm" />
              {/* <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <Chip key={index} text={tech} />
                ))}
              </div> */}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Experiences;
