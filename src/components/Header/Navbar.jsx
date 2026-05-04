import React, { useState } from 'react';

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Stili per l'animazione
    const mobileMenuStyle = {
        maxHeight: isOpen ? '300px' : '0px',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s ease-in-out',
        backgroundColor: 'white',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
    };

    return (
        <nav className="position-fixed w-100 p-3" style={{ zIndex: 1000, top: 0 }}>
            <div className="d-flex justify-content-between align-items-center">
                {/* Logo */}
                <a href="/" className="text-uppercase Aktiv-Grotesk-Black" style={{ textDecoration: "none", color: "black", fontSize: "25px" }}>
                    sara molino
                </a>

                {/* Desktop Menu */}
                <ul className="d-none d-md-flex m-0 p-0" style={{ listStyle: "none" }}>
                    {links.map((item) => (
                        <li key={item.id} className="me-4 Aktiv-Grotesk-Regular">
                            <a href={item.path} className="text-dark fs-4" style={{ textDecoration: "none" }}>
                                {item.linkName}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="d-md-none" onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '35px', transition: 'transform 0.3s' }}>
                    <span style={{ display: 'block', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }}>
                        {isOpen ? '✕' : '☰'}
                    </span>
                </div>
            </div>

            {/* Mobile Menu con Animazione */}
            <div className="d-md-none" style={mobileMenuStyle}>
                <ul className="m-0 p-4 text-center" style={{ listStyle: "none" }}>
                    {links.map((item) => (
                        <li key={item.id} className="mb-3 Aktiv-Grotesk-Regular">
                            <a
                                href={`/${item.linkName.toLowerCase()}`}
                                className="text-dark fs-4"
                                onClick={() => setIsOpen(false)}
                                style={{ textDecoration: "none", display: 'block' }}
                            >
                                {item.linkName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;