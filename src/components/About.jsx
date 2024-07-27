import Title from "./Title";
import Section from "./Section";
import Text from "./Text";
import { CV_DATA } from "../data/CvData";

function About() {
  const { about } = CV_DATA;
  return (
    <Section>
      <Title text={about.title} />
      <Text text={about.text} />
    </Section>
  );
}

export default About;
