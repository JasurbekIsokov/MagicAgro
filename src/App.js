import React from "react";

import { Layout } from "./layouts/Layout";
import Hero from "./components/Hero/Hero";
import BgAnimation from "./components/BackAnimation/BackAnimation";
import { Section } from "./styles/GlobalComponents";
import Acomplishments from "./components/Acomplishments/Acomplishments";
import Timeline from "./components/Timeline/TimeLine";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Acomplishments />
        <Projects />
        <Timeline />
      </Layout>
    </>
  );
}

export default App;
