/* eslint-disable react/prop-types */
import { CV_DATA } from "../data/CvData";
import Section from "./Section";
import Title from "./Title";
import Text from "./Text";

const linkClass =
  "italic underline underline-offset-2 hover:text-black print:text-gray-800";

function Projects({ lang }) {
  const { projects } = CV_DATA[lang];

  return (
    <Section>
      <Title text={projects.title} />
      <div className="flex flex-col gap-3">
        {projects.data.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h3 className="text-sm font-bold print:text-[12px]">{item.title}</h3>

            {item.desc && <Text text={item.desc} size="sm" />}

            {item.links && (
              <p className="flex flex-wrap items-center gap-x-1 text-sm text-gray-600 print:text-gray-800 print:text-[12px]">
                {item.links.map((link, key) => (
                  <span key={key} className="inline-flex items-center gap-x-1">
                    {key > 0 && (
                      <span className="not-italic">{link.separator || "·"}</span>
                    )}
                    {link.prefix && (
                      <span className="not-italic">{link.prefix}</span>
                    )}
                    {link.url ? (
                      <a href={link.url} target="_blank" className={linkClass}>
                        {link.text}
                      </a>
                    ) : (
                      <span className="italic underline underline-offset-2">
                        {link.text}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            )}

            {item.isList && (
              <div className="flex flex-col gap-1">
                {item.items.map((subItem, key) => (
                  <p
                    key={key}
                    className="text-sm text-gray-600 print:text-gray-800 print:text-[12px]"
                  >
                    <span className="font-bold text-black print:text-black">
                      {subItem.label}
                    </span>
                    {" - "}
                    <a
                      href={subItem.url}
                      target="_blank"
                      className={linkClass}
                    >
                      {subItem.text}
                    </a>
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
