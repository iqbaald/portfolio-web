import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Toolkit from "./components/Toolkit";
import Project from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div className="absolute inset-0 -z-10 h-[1000px] w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <Navbar />
      <Hero />
      <Toolkit />
      <Education />
      <Project />
      <Footer />
    </>
  );
}

export default App;
