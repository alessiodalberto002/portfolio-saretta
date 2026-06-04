import React, { useState } from 'react';
import firma from "../../assets/img/firma_sara.png"
import { motion } from "framer-motion";

const Footer = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div id="contact" className="container p-3">
                {/* Su mobile in colonna e centrato, su desktop in riga con spazio tra gli elementi */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                    <a
                        href="/#home"
                        className="uppercase Aktiv-Grotesk-Black text-decoration-none animate-fonts"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '150px', // Regola in base alla larghezza della tua scritta/firma
                            height: '50px',
                            fontSize: "25px",
                            transition: "all 0.3s ease",
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Testo */}
                        <span style={{
                            opacity: isHovered ? 0 : 1,
                            transition: 'opacity 0.2s ease',
                            color: 'black',
                            fontSize: '18px'
                        }}>
                            sara molino
                        </span>

                        {/* Immagine */}
                        <img
                            src={firma}
                            alt="Firma"
                            style={{
                                position: 'absolute',
                                opacity: isHovered ? 1 : 0,
                                width: '100%',
                                height: 'auto',
                                pointerEvents: 'none',
                                transition: 'opacity 0.2s ease',
                                objectFit: 'contain'
                            }}
                        />
                    </a>

                    <motion.a
                        href="mailto:saramolino35@gmail.com"
                        className="m-0 Aktiv-Grotesk-Light text-black text-decoration-none"
                        style={{ fontWeight: 300, willChange: "font-weight" }} // Suggerisce al browser di ottimizzare l'animazione di questa proprietà
                        whileHover={{ fontWeight: 700, y: -5, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        saramolino35@gmail.com
                    </motion.a>

                    <div className="flex justify-between items-center gap-3 text-xl">
                        <motion.a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-black no-underline" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, rotate: 5 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-instagram"></i></motion.a>
                        <motion.a href="https://www.linkedin.com/in/sara-molino-6604882b3/" className="text-black no-underline" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, rotate: 5 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-linkedin-in"></i></motion.a>
                    </div>
                </div>

                {/* Testo finale centrato su mobile per estetica, mantenuto normale su desktop */}
                <motion.a href="#" className="Aktiv-Grotesk-Light text-black text-center md:text-left mt-3 md:mt-2 block text-decoration-none">
                    Twinkle twinkle little design, how I wonder what you'll shine! Up above the page so high, ideas sparkling in my eye.
                </motion.a>
            </div>
        </>
    )
}

export default Footer