import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // console.log(window.scrollY);
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroled = {
    // backgroundColor: '#17173cff',
    backgroundColor: 'rgba(23, 23, 60, 0.7)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    transition: 'all 0.3s ease-in-out'
  }
  const notScroled = {
    backgroundColor: '#16166aff',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <header
      className={`navbar 
      ${scrolled ? 'scrolled' : "not-scrolled"}`}
      style={scrolled ? scroled : notScroled}
    >
      <div className="inner">
        <a href="#hero" className="logo">
          Muqeet Ren-A &trade;
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

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
