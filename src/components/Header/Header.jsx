import React from "react";
import { Link } from "react-router-dom";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  <Container>
    <Div1>
      <Link href="/">
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
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#categoeis">
          <NavLink>Categories</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="#" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" target="_blank">
        <BiPaperPlane size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>;
};

export default Header;
