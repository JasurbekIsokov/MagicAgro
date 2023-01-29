import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../Constants/Constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Foydali ochiq ma'lumotar</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <div data-aos="fade-up">
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent></TitleContent>
                <TagList></TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.source} target="_blank">
                  Sahifaga O'tish
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          </div>
        );
      })}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Projects;
