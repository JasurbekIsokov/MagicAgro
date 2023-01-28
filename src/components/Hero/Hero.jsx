import React from "react";
import Typed from "react-typed";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding id="section">
      <LeftSection id="sectionTextLeft">
        <SectionTitle main center>
          <Typed strings={[" MagicAgro"]} typeSpeed={60} />
        </SectionTitle>
        <SectionText id="sectionText">
          <p id="sectionText-text">
            O'simliklar, poliz ekinlari , daraxtlar va gullarni ekish va ularni
            parvarish qilish. Expertlar va dexqonlardan kerakli tavsiyalar.
            Kasallangan o'simliklarni suniy intelekt yordamida aniqlash va
            yechim topish.
            <span>
              Kerakli ish kuchini taklif qilish va yollash. Agro texnikalarni
              sotib olish va ijaraga olish. Mehsulotlarni online bozorda sotish
              va sotib olish. Tadbirkorlar va mahsulot yetishtiruvchilarni
              o'zaro bog'lash va hamkorlik qilish.
            </span>
            <span>..</span>
          </p>
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
