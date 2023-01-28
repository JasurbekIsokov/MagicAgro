import React from "react";
import { useState, useEffect } from "react";

import Slider from "react-slick";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Nevs = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Section nopadding id="nevs">
      <SectionTitle main>Yangiliklar</SectionTitle>
      <SectionDivider />
      <div className="nevs"></div>
    </Section>
  );
};

export default Nevs;
