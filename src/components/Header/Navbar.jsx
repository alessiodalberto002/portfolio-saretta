import React, { useState } from 'react';

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Stile comune per l'effetto Blur (Vetro)
    const glassStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Bianco semitrasparente
        backdropFilter: 'blur(10px)',                // L'effetto sfocatura
        WebkitBackdropFilter: 'blur(10px)',          // Supporto per Safari
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    };

    const mobileMenuStyle = {
        maxHeight: isOpen ? '400px' : '0px',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s ease-in-out',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        ...glassStyle, // Applichiamo il blur anche al menu a tendina
    };

    return (
        <nav
            className="position-fixed w-100 p-3"
            style={{ ...glassStyle, zIndex: 1000, top: 0 }}
        >
            <div className="container-fluid d-flex justify-content-between align-items-center">
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
                <div className="d-md-none" onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '30px' }}>
                    <span style={{
                        display: 'block',
                        transform: isOpen ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.3s'
                    }}>
                        {isOpen ? '✕' : '☰'}
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="d-md-none" style={mobileMenuStyle}>
                <ul className="m-0 p-4 text-center" style={{ listStyle: "none" }}>
                    {links.map((item) => (
                        <li key={item.id} className="mb-3 Aktiv-Grotesk-Regular">
                            <a
                                href={item.path}
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