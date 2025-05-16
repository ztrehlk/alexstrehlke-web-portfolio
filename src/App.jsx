// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Fortis from './pages/Fortis/Fortis';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/fortis" element={<Fortis />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;