import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo">
        <span className="navbar__mark">A</span>
        afnaan.dev
      </a>

      <nav className="navbar__links">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#darktech">darktech</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}