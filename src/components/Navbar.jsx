import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">Alex Strehlke</div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/test">Experience</NavLink>
        <a href="#highlights">Fortis</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;