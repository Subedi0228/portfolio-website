import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

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
