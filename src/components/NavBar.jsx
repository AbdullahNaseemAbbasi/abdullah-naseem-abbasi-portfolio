import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo" onClick={handleLinkClick}>
          <span className="hidden sm:inline">Abdullah Naseem Abbasi</span>
          <span className="sm:hidden">Abdullah N. Abbasi</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group hidden lg:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        <button
          type="button"
          className={`hamburger lg:hidden ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <nav className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ link, name }, i) => (
            <li
              key={name}
              style={{ transitionDelay: `${mobileOpen ? 0.1 + i * 0.08 : 0}s` }}
            >
              <a href={link} onClick={handleLinkClick}>
                <span className="mobile-link-num">0{i + 1}</span>
                <span>{name}</span>
              </a>
            </li>
          ))}
          <li
            style={{
              transitionDelay: `${mobileOpen ? 0.1 + navLinks.length * 0.08 : 0}s`,
            }}
          >
            <a href="#contact" onClick={handleLinkClick} className="mobile-cta">
              <span>Contact me →</span>
            </a>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <p>abdullahnaseem1386@gmail.com</p>
          <p>Karachi, Pakistan</p>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
