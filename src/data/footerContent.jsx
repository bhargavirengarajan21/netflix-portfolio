import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/yourprofile', icon: <FaFacebook /> },
  { label: 'Instagram', href: 'https://instagram.com/yourprofile', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
  { label: 'Github', href: 'https://github.com/yourprofile', icon: <FaGithub /> },
  { label: 'Gmail', href: 'mailto:youremail@example.com', icon: <FaEnvelope /> },
];