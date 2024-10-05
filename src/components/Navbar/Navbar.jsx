import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const checkWindowSize = () => {
        if (window.innerWidth > 768) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const handleScrollToSection = (e, target) => {
        e.preventDefault();
        const section = document.querySelector(target);
        if (section) {
            const navbarHeight = 60;
            const topOffset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
        setIsActive(false);
    };

    return (
        <>
            <div className="nav-bar">
                <div className="nav-logo" onClick={() => setIsActive(false)}>
                    <a href="#">Portfólio</a>
                </div>
                <nav className="nav-links">
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#ability")}>Habilidades</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#knowledge")}>Conhecimento</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#projects")}>Projetos</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#about")}>Sobre</a>
                </nav>
                <div className="nav-menu-icon" onClick={() => setIsActive(!isActive)}>
                    <i className="bx bx-menu"></i>
                </div>
            </div>

            {isActive && (
                <div className="nav-overlay" onClick={() => setIsActive(false)}></div>
            )}

            <aside className={`sidebar ${isActive ? "active" : ""}`}>
                <nav className="sidebar-links">
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#ability")}>Habilidades</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#knowledge")}>Conhecimento</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#projects")}>Projetos</a>
                    <a href="#" onClick={(e) => handleScrollToSection(e, "#about")}>Sobre</a>
                </nav>
            </aside>
        </>
    );
};

export default Navbar;
