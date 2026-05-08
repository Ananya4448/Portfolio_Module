import { useEffect } from "react";

function Header({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [menuOpen]);

  return (
    <header>
      <a href="#" className="logo">
        <span>A</span>Saha
      </a>
      <ul className={`navlist ${menuOpen ? "active" : ""}`} onClick={closeMenu}>
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">My Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="right-header">
        <a href="#" className="btn">
          Start discussion <i className="bx bx-message-dots"></i>
        </a>
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
