import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="box-border bg-white dark:bg-gray-900 scroll-smooth font-poppins">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
