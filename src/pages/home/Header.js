import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo_wo_whitespace from '../../assets/logo_wo_whitespace.png';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/"><img src={logo_wo_whitespace} className="logo"></img></NavLink>
        <ul>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          {/*<li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>*/}
          {/*<li><NavLink to="/about-me" className={({ isActive }) => isActive ? 'active' : ''}>About me</NavLink></li>
          <li><NavLink to="/contact-me" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink></li>*/}
        </ul>
        <div className="header-right">
        <div className="social-icons">
          <a href="https://linkedin.com/in/ybshah" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ybshah02" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub />
          </a>
        </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;