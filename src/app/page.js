import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Header from "./sections/Header";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";

export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Benefits/>
    <Roadmap/>
    <Faq/>
    <Team/>
    </>
  );
}