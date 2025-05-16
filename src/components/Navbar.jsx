import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">Alex Strehlke</div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/fortis">Fortis</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;