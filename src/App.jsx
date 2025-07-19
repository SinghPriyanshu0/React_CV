// src/App.jsx
import React from 'react';
import Hero from './sections/Hero';
import ResponsiveAppBar from './assets/components/Header';
import About from './sections/About';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Education_and_Skills from './sections/Education_and_Skills';



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ResponsiveAppBar />
      <Hero />
      <About />
      <Journey />
      <Education_and_Skills />
      <Contact />
    </>
  );
}

export default App;

