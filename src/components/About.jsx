/* eslint-disable react/prop-types */
import Title from "./Title";
import Section from "./Section";
import Text from "./Text";
import { CV_DATA } from "../data/CvData";

function About({ lang }) {
  const { about } = CV_DATA[lang];
  return (
    <Section>
      <Title text={about.title} />
      <Text text={about.text} />
    </Section>
  );
}

export default About;
