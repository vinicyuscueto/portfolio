import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Ability from "./sections/Ability/Ability";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import Knowledge from "./sections/Knowledge/Knowledge";
import Projects from "./sections/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Ability />
      <Knowledge />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default App;