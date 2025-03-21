

import Footer from "../components/Footer";
import Hero from "../components/Header";
import Work from "../components/Work";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Abilities from "../components/Abilities";
export default function Home() {
  return (
    <div className="items-center justify-center bg-gray-900 text-white">
    <Hero/>
    <About/>
     <Work/>
     <Portfolio/>
     <Abilities/>
     <Footer/>
    </div>
  );
}
