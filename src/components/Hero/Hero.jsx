import React from 'react';
import { motion } from 'framer-motion';
import asterisco from "../../assets/img/asterisco.gif";

const Hero = () => {
    return (
        <section id='home' className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden">

            <div className="relative flex items-center justify-center w-full max-w-6xl px-4">



                {/* CENTRO: GIF (Dimensione originale) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "backOut" }}
                    className="mx-8"
                >
                    <img
                        src={asterisco}
                        alt="Asterisk"
                        // Rimuovendo le classi di larghezza fissa, mantiene la dimensione nativa del file
                        className="max-w-[700px]"
                    />
                </motion.div>


            </div>

        </section>
    );
};

export default Hero;