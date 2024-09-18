import React, { useState, useContext } from "react";
import './NavBar.css';
import { ThemeContext } from '../../App';
import { IoMdArrowDropdown } from 'react-icons/io';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((th) => (th === "light" ? "dark" : "light"));
    }

    return (
        <div className="navbar-wrapper">
            {/* the left portion */}
            <div className="left">
                <div className="logo-container">
                    <h1><a href="/">&lt;S/&gt;</a></h1>
                </div>
                <button
                    onClick={toggleTheme}
                    className={`theme-toggle-btn ${theme === "dark" ? "dark" : "light"}`}
                >
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
            </div>

            {/* the right portion */}
            <div className={hamburgerOpen ? 'right open' : 'right'}>
                <a
                    href="#home"
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('home')}
                >
                    Home
                </a>

                <a
                    href="#about"
                    className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('about')}
                >
                    About
                </a>

                <a
                    href="#skills"
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('skills')}
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('projects')}
                >
                    Projects
                </a>

                {/* Removed Experience Link */}

                <p id="more">
                    More <span><IoMdArrowDropdown /></span>
                    <div className="dropdown">
                        <a
                            href="#tech"
                            className={activeLink === 'tech' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('tech')}
                        >
                            Tech
                        </a>
                        <a
                            href="#achievements"
                            className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('achievements')}
                        >
                            Achievements
                        </a>
                        <a
                            href="#testimonials"
                            className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('testimonials')}
                        >
                            Testimonials
                        </a>
                    </div>
                </p>

                {/* Social Icons moved here */}
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/shreeya-pandey-70a485225/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Shiripandey" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github-alt"></i>
                    </a>
                </div>
            </div>

            <button
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
                className="hamburger-icon"
            >
                <i className={hamburgerOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>
        </div>
    );
}

export default NavBar;
