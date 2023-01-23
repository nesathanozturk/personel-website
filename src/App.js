import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
