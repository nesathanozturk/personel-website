import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="box-border bg-gray-900 text-gray-100 font-Poppins scroll-smooth">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
