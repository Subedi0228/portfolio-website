import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
