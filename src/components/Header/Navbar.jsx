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
            <nav className="fixed w-full p-3" style={navStyle}>
                <div className="w-full flex justify-between items-center relative z-[1001]">
                    
                    {/* Logo - Cambia colore in base a isOpen */}
                    <a
                        href="/"
                        className="uppercase Aktiv-Grotesk-Black text-decoration-none"
                        style={{
                            color: isOpen ? "white" : "black",
                            fontSize: "25px",
                            transition: "color 0.3s ease"
                        }}
                    >
                        sara molino
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex m-0 p-0 list-none">
                        {links.map((item) => (
                            <li key={item.id} className="mr-8 Aktiv-Grotesk-Regular">
                                <a href={item.path} className="text-black text-xl text-decoration-none">
                                    {item.linkName}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Icon - Cambia colore e ruota */}
                    <div
                        className="md:hidden margin-bottom-mobile"
                        onClick={toggleMenu}
                        style={{
                            cursor: 'pointer',
                            fontSize: '35px',
                            color: isOpen ? 'white' : 'black',
                            transition: 'color 0.3s ease, transform 0.3s ease',
                            lineHeight: '1'
                        }}
                    >
                        <span className="block" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                            {isOpen ? '✕' : '☰'}
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Full-Screen */}
                <div style={mobileOverlayStyle}>
                    <ul className="m-0 p-0 w-full text-center list-none">
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
                                    className="Aktiv-Grotesk-Black inline-block text-white uppercase no-underline"
                                    style={{
                                        fontSize: '2.5rem',
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