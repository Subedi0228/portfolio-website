import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import ContactMe from "./components/contact/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Add an id for each section to enable scrolling */}
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}

export default App;
