import React from 'react';
import Logo from './header/Logo';
import ToggleButton from './header/ToggleButton';

export default function Header() {
    const logo = [
        {"img": "/image/favicon.ico", "name": "Judy"}
    ]
    const menus = [
        {"href": "#home", "style": "header-menu-item", "name": "Home"},
        {"href": "#about", "style": "header-menu-item", "name": "About"},
        {"href": "#skills", "style": "header-menu-item", "name": "Skills"},
        {"href": "#work", "style": "header-menu-item", "name": "My Work"},
        {"href": "#testimonial", "style": "header-menu-item", "name": "Testimonial"},
        {"href": "#contact", "style": "header-menu-item", "name": "Contact"}
    ]
    return (
        <header className="header">
            <div class="header-logo">
                    <h1 class="header-logo-title">Judy</h1>
            </div>
            <nav>
                <ul class="header-menu open">
                    <li><a href="#home" class="header-menu-item active">Home</a></li>
                    <li><a href="#about" class="header-menu-item">About</a></li>
                    <li><a href="#skills" class="header-menu-item">Skills</a></li>
                    <li><a href="#work" class="header-menu-item">My Work</a></li>
                    <li><a href="#testimonial" class="header-menu-item">Testimonial</a></li>
                    <li><a href="#contact" class="header-menu-item">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

