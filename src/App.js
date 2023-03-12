import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex">
        <Router>
        <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
  </Router>
    </div>
  );
}

export default App;
