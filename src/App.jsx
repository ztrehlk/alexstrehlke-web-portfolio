// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Fortis from './pages/Fortis/Fortis';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <Router basename="/alexstrehlke-web-portfolio">
      <ScrollToTop /> {/* ✅ Add this line */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/fortis" element={<Fortis />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
