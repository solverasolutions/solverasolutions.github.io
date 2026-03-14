import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Process from "./components/sections/Process";
import Technologies from "./components/sections/Technologies";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import FinalCTA from "./components/sections/FinalCTA";

const LOGO_URL = "/logo.png";

export default function App() {
  return (
    <div>
      <Navbar logo={LOGO_URL} />
      <Hero logo={LOGO_URL} />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Technologies />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer logo={LOGO_URL} />
    </div>
  );
}
