import React from "react";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import useWindowDimensions from "../../Hooks/GetWindow";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Nevs = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    // console.log(width);
  });

  let sliderNumber = 3;

  if (width <= 1050) {
    sliderNumber = 2;
  }

  if (width <= 600) {
    sliderNumber = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: sliderNumber,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  return (
    <Section nopadding id="nevs">
      <SectionTitle main>Yangiliklar</SectionTitle>

      <div className="nevs">
        <Slider {...settings}>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti. saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom saLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consectetur ipsum veritatis, ullam optio dolor
                doloribus corrupti et illo. Cumque, deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti. saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom saLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consectetur ipsum veritatis, ullam optio dolor
                doloribus corrupti et illo. Cumque, deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti. saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom saLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consectetur ipsum veritatis, ullam optio dolor
                doloribus corrupti et illo. Cumque, deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti. saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom saLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consectetur ipsum veritatis, ullam optio dolor
                doloribus corrupti et illo. Cumque, deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti. saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom saLorem ipsum dolor sit amet, consectetur
                adipisicing elit. Consectetur ipsum veritatis, ullam optio dolor
                doloribus corrupti et illo. Cumque, deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="nevs__card">
            <div className="nevs__card--box">
              <p>
                saLorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur ipsum veritatis, ullam optio dolor doloribus
                corrupti et illo. Cumque, deleniti.lom saLorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur ipsum veritatis,
                ullam optio dolor doloribus corrupti et illo. Cumque,
                deleniti.lom
              </p>
              <button>Read More</button>
            </div>
          </div>
        </Slider>
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Nevs;
