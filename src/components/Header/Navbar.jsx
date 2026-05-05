import React, { useState } from 'react';

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Stile della Navbar principale (Blur)
    const navStyle = {
        zIndex: 1000,
        top: 0,
        backgroundColor: isOpen ? 'transparent' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: isOpen ? 'none' : 'blur(10px)',
        WebkitBackdropFilter: isOpen ? 'none' : 'blur(10px)',
        transition: 'all 0.3s ease',
    };

    // Stile dell'overlay mobile nero
    const mobileOverlayStyle = {
        height: isOpen ? '100vh' : '0vh',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.98)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        transition: 'all 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        visibility: isOpen ? 'visible' : 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <>
            <nav className="position-fixed w-100 p-3" style={navStyle}>
                <div className="container-fluid d-flex justify-content-between align-items-center" style={{ position: 'relative', zIndex: 1001 }}>
                    {/* Logo - Cambia colore in base a isOpen */}
                    <a
                        href="/"
                        className="text-uppercase Aktiv-Grotesk-Black"
                        style={{
                            textDecoration: "none",
                            color: isOpen ? "white" : "black",
                            fontSize: "25px",
                            transition: "color 0.3s ease"
                        }}
                    >
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

                    {/* Hamburger Icon - Cambia colore e ruota */}
                    <div
                        className="d-md-none margin-bottom-mobile"
                        onClick={toggleMenu}
                        style={{
                            cursor: 'pointer',
                            fontSize: '35px',
                            color: isOpen ? 'white' : 'black',
                            transition: 'color 0.3s ease, transform 0.3s ease',
                            lineHeight: '1'
                        }}
                    >
                        <span style={{ display: 'block', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                            {isOpen ? '✕' : '☰'}
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Full-Screen */}
                <div style={mobileOverlayStyle}>
                    <ul className="m-0 p-0 w-100 text-center" style={{ listStyle: "none" }}>
                        {links.map((item, i) => (
                            <li
                                key={item.id}
                                className="mb-4"
                                style={{
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.4s ease-out ${i * 0.1}s`,
                                }}
                            >
                                <a
                                    href={item.path}
                                    onClick={(e) => setIsOpen(false)}
                                    className="Aktiv-Grotesk-Black"
                                    style={{
                                        textDecoration: "none",
                                        display: 'inline-block',
                                        fontSize: '2.5rem',
                                        color: 'white',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                    }}
                                >
                                    {item.linkName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;