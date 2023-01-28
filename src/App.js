import React from "react";

import { Layout } from "./layouts/Layout";
import Hero from "./components/Hero/Hero";
import BgAnimation from "./components/BackAnimation/BackAnimation";
import { Section } from "./styles/GlobalComponents";

function App() {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
      </Layout>
    </>
  );
}

export default App;
