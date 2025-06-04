import React, { useState, useEffect, useRef } from 'react';
import HeaderData from '../data/headerData';
import MobileMenu from './MobileMenu';
import ProfileImage from './Profile';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ name, setDataContent, isLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    setDataContent((prevData) => ({ ...prevData, isLoggedIn: false, sessionData: {} }));
    await fetch(`${import.meta.env.VITE_API_URL}/unset-session`, { method: 'POST' });
    setDropdownOpen(false);
    window.location.href = '/login';
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

const DesktopMenu = () => {
    return (
      <header className={`header-desktop ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src={HeaderData.logo} alt="Logo" />
        </div>
        <nav className="menu">
          <ul>
            {HeaderData.menuContent.map((item, index) => (
              <li key={index}>
                <a className="text-base text-white" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher />
        {name && isLoggedIn && (
          <div className="profile-dropdown-wrapper" ref={dropdownRef}>
            <ProfileImage name={name || "Guest"} onClickHandle={() => setDropdownOpen((prev) => !prev)} dropdownOpen={dropdownOpen}/>
            {dropdownOpen && (
              <div className="profile-dropdown-menu">
                <button className="logout-btn" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    );
}

console.log('Header component rendered', isMobile);

  return (
    isMobile ? (
      <MobileMenu name={name} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    ) : (
      <DesktopMenu />
    )
  );
};

export default Header;