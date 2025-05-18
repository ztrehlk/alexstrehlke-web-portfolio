import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">Alex Strehlke</div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>

        {/* Modern dropdown with clickable parent link */}
        <div className="dropdown">
          <NavLink 
            to="/fortis" 
            end 
            className="dropdown-toggle"
          >
            Fortis
            {/* <svg className="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg> */}
          </NavLink>
          {/* <div className="dropdown-content">
            <div className="dropdown-inner">
              <NavLink to="/fortis">Overview</NavLink>
              <NavLink to="/fortis/features">Key Features</NavLink>
              <NavLink to="/fortis/blog">Blog Posts</NavLink>
            </div>
          </div> */}
        </div>

        {/* <NavLink to="/projects">Projects</NavLink> */}
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;