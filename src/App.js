import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="box-border bg-white dark:bg-gray-900 scroll-smooth font-poppins transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
