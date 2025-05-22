import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Alex Strehlke</div>
      
      {/* Mobile menu button - always visible on mobile */}
      <button 
        className={`mobile-menu-button ${isMobileView ? 'visible' : ''}`} 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`menu-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>
      
      {/* Navigation links - hidden on mobile when menu is closed */}
      <div className={`nav-links ${isMobileView ? (isMobileMenuOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
        <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
        <NavLink to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</NavLink>
        <NavLink to="/fortis" onClick={() => setIsMobileMenuOpen(false)}>Fortis</NavLink>
        <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && isMobileView && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;