import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Roadmap from "./sections/Roadmap";
// import Team from "./sections/Team";
import Navbar from "./components/Navbar";
import SneakPeek from "./sections/SneakPeek";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Benefits />
      <Features />
      <Roadmap />
      <Faq />
      <SneakPeek/>
    </>
  );
}
