import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          MagicAgro
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          exercitationem explicabo necessitatibus delectus dolore sunt corrupti
          officiis aliquid laborum ex.
        </SectionText>
        <Button>
          <a href="#" rel="noopener noreferrer" style={{ color: "white" }}>
            Read More
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;