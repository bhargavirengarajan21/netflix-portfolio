import React, { useState, useRef, useEffect } from 'react';
import HeaderData from '../data/headerData';
import ProfileImage from './Profile';

const MobileMenu = ({ name, isLoggedIn, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      setIsScrolled(el.scrollWidth > el.clientWidth);
    }
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  console.log("MobileMenu rendered with name:", name, "isLoggedIn:", isLoggedIn, scrolled);

  return (
    <header className={` ${scrolled ? 'scrolled' : ""} header-mobile`} ref={scrollRef}>
        <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
            <div className="logo">
                <img src={HeaderData.logo} alt="Logo" />
                <span className="episode-toggle">{menuOpen ? "▲" : "▼"}</span>
            </div>
        </button>

        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul>
            {HeaderData.menuContent.map((item, index) => (
            <li key={index}>
                <a href={item.link} onClick={() => setMenuOpen(false)}>
                {item.name}
                </a>
            </li>
            ))}
            </ul>
        </nav>
      {name && isLoggedIn && (
        <div className="profile-dropdown-wrapper" ref={dropdownRef}>
          <ProfileImage
            name={name}
            onClickHandle={() => setDropdownOpen(prev => !prev)}
            dropdownOpen={dropdownOpen}
          />
          {dropdownOpen && (
            <div className="profile-dropdown-menu">
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default MobileMenu;
