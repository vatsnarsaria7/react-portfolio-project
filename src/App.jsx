import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute top-0 z-[-2] h-auto min-h-full w-auto min-w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <NavBar />
          <Hero />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
