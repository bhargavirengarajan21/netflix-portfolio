import React from "react";
import { socialLinks } from "../data/footerContent.jsx";

const Footer = () => {
  return (
    <footer className="netflix-footer px-8 py-8 mt-auto">
      <div className="icon-wrapper flex gap-6 justify-center mb-4">
        {socialLinks.map(link => {
          return (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-red-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
            {link.icon}
            </a>
          );
        })}
      </div>
      <div className="text-center text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} Bhargavi Rengarajan. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
