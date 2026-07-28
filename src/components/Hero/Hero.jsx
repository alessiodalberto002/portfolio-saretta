import React from 'react';
import { motion } from 'framer-motion';
// Assicurati che il percorso dell'immagine sia corretto rispetto alla tua struttura
import asterisco from "../../assets/img/asterisco.gif";

const Hero = () => {
    // Varianti per l'animazione del testo che entra da sinistra
    const leftTextVariants = {
        hidden: { x: -150, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5, // Ritardo per coordinarsi con la GIF
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    // Varianti per l'animazione del testo che entra da destra
    const rightTextVariants = {
        hidden: { x: 150, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id='home' className="w-screen h-screen bg-white flex items-center justify-center Aktiv-Grotesk-Light">

            <div className="flex flex-col">
                {/* Container principale responsive: colonna su mobile, riga su desktop */}
                <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-4 gap-10 md:gap-10">

                    {/* SINISTRA: "think" (entra da sinistra) */}
                    {/* Su mobile è il primo elemento in alto */}
                    <motion.div
                        className="text-6xl uppercase md:text-8xl text-gray-900 md:order-1"
                        initial="hidden"
                        animate="visible"
                        variants={leftTextVariants}
                    >
                        think
                    </motion.div>

                    {/* CENTRO: GIF (Dimensione originale mantenuta con max-w) */}
                    {/* Su mobile è l'elemento centrale */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="flex justify-center md:order-2"
                    >
                        <img
                            src={asterisco}
                            alt="Asterisk"
                            // Mantiene la dimensione nativa o si adatta allo schermo
                            className="max-w-[150px] sm:max-w-[200px] md:max-w-[150px] h-auto"
                        />
                    </motion.div>

                    {/* DESTRA: "create" (entra da destra) */}
                    {/* Su mobile è l'ultimo elemento in basso */}
                    <motion.div
                        className="text-6xl uppercase md:text-8xl text-gray-900 md:order-3"
                        initial="hidden"
                        animate="visible"
                        variants={rightTextVariants}
                    >
                        create
                    </motion.div>

                </div>

                <motion.div initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className='flex justify-center items-center Aktiv-Grotesk-Thin text-center p-4'>
                            
                    <p className="text-xl md:text-2xl">(faccio cose belle per evitare di dovermi trovare un lavoro noioso)</p>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;