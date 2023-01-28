import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1, text: "Agro Docs" },
  { number: 2, text: "Agro Forum" },
  { number: 3, text: "Agro Detect" },
  { number: 4, text: "Agro Job" },
  { number: 5, text: "Agro Tex" },
  { number: 6, text: "Agro Market" },
  { number: 7, text: "Components" },
  { number: 8, text: "Components" },
];

const Acomplishments = () => {
  const handleClick = (id) => {
    console.log(id);

    if (id === 1) {
      window.location.replace("https://nextpage");
    }
  };

  return (
    <Section id="categoeis">
      <SectionTitle>Categories</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index} onClick={() => handleClick(index)}>
            <BoxNum>{`${card.text}`}</BoxNum>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
