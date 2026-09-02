/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import Text from "./Text";

function Experiences({ lang }) {
  const { experiences } = CV_DATA[lang];

  return (
    <Section>
      <Title text={experiences.title} />
      <div className="flex flex-col gap-3">
        {experiences.data.map((item, index) => {
          const dates = item.endDate
            ? `${item.startDate} - ${item.endDate}`
            : item.startDate;
          return (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-sm font-bold print:text-[12px]">
                {item.companyLink ? (
                  <a
                    href={item.companyLink}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
                {item.job ? ` - ${item.job} -` : " -"}
                <span className="font-normal">{` ${dates}`}</span>
              </h3>
              <Text text={item.jobDesc} size="sm" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Experiences;
