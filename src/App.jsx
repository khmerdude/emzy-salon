import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import About from './components/about/About';
import Awards from './components/awards/Awards';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BackToTop from './components/ui/BackToTop';

function App() {
  // Which service menu (hair / beauty / spa) is showing; the navbar dropdown can switch it too
  const [activeService, setActiveService] = useState('hair');

  return (
    <>
      <Navbar onSelectService={setActiveService} />
      <main>
        <Hero />
        <Services active={activeService} onSelect={setActiveService} />
        <About />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
