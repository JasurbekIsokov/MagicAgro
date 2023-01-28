import React from "react";
import { Link, useHref } from "react-router-dom";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { DiCssdeck } from "react-icons/di";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
  Container,
  HeaderContainer,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./LayoutStyles";

export const Layout = ({ children }) => {
  // let hreff = useHref();

  return (
    <Container>
      <HeaderContainer>
        <Div1>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>MagicAgro</Span>
          </a>
        </Div1>
        <Div2>
          <li>
            <a href="#projects">
              <NavLink>Projects</NavLink>
            </a>
          </li>
          <li>
            <a href="#tech">
              <NavLink>Technologies</NavLink>
            </a>
          </li>
          <li>
            <a href="#about">
              <NavLink>About</NavLink>
            </a>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com/JasurbekIsokov" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/jasurbekisokov/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/JaSurBeK_IsoKoV" target="_blank">
            <BiPaperPlane size="3rem" />
          </SocialIcons>
        </Div3>
      </HeaderContainer>

      <main>{children}</main>
      <Footer />
    </Container>
  );
};
