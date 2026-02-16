import Navbar from "@/components/layout/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Industries from "./IndustriesHome";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <Features />
      <Projects />
    </>
  );
}

export default Home;
