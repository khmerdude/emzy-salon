import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  const [isHairModalOpen, setIsHairModalOpen] = useState(false);
  const [isBeautyModalOpen, setIsBeautyModalOpen] = useState(false);
  const [isSpaModalOpen, setIsSpaModalOpen] = useState(false);

  return (
    <Router>
      <div>
        <Navbar 
          openHairModal={() => setIsHairModalOpen(true)}
          openBeautyModal={() => setIsBeautyModalOpen(true)}
          openSpaModal={() => setIsSpaModalOpen(true)}
        />
        <Home 
          isHairModalOpen={isHairModalOpen}
          setIsHairModalOpen={setIsHairModalOpen}
          isBeautyModalOpen={isBeautyModalOpen}
          setIsBeautyModalOpen={setIsBeautyModalOpen}
          isSpaModalOpen={isSpaModalOpen}
          setIsSpaModalOpen={setIsSpaModalOpen}
        />
      </div>
    </Router>
  );
}

export default App; 