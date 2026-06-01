import React, { useState } from 'react';
import aboutImg from "../../assets/img/dolcina.gif";
import { Modal } from 'react-bootstrap';
import { motion } from "framer-motion";

const About = () => {
    const [showBlock, setShowBlock] = useState(false);

    // Varianti per il contenitore principale (staggering)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Un po' più veloce per rendere fluido il continuo scroll
            }
        }
    };

    // Varianti per i singoli elementi
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="min-h-screen w-full" style={{ padding: "150px 0" }}>

            {/* SEZIONE DESKTOP */}
            <motion.div
                className="hidden md:block h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                // RIMOSSO once: true -> L'animazione si ripete ogni volta che entri/esci
                viewport={{ margin: "-15%" }}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <motion.h1
                        variants={itemVariants}
                        className="uppercase mb-5 text-center Aktiv-Grotesk-Black"
                        style={{ fontSize: "50px" }}
                    >
                        about
                    </motion.h1>

                    <div className="flex items-center justify-center gap-12">
                        <motion.img
                            variants={itemVariants}
                            className="w-1/4"
                            src={aboutImg}
                            alt="Profile"
                        />

                        <motion.div
                            variants={itemVariants}
                            className="w-[30%] Aktiv-Grotesk-Light"
                            style={{ fontSize: "20px" }}
                        >
                            <p>
                                Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                                Mi nutro di caffè, intuizioni notturne e libri, forse troppi. <br /><br />
                                Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                                Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                                Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist: oggi disegno,
                                domani uncinetto, poi sport, cinema o qualsiasi cosa riesca a catturare la mia curiosità.
                                È qui che per me inizia davvero il processo creativo: quando c’è spazio per costruire, inventare, provare. <br /><br />

                                Se sei arrivato fin qui, puoi
                                <motion.a href="https://www.linkedin.com/in/sara-molino-6604882b3/" target="_blank"
                                    className="mx-1 underline underline-offset-2 text-black inline-block transition-all"
                                    style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    giudicarmi,
                                </motion.a>
                                <motion.a href="mailto:saramolino35@gmail.com" className="underline underline-offset-2 text-black"
                                    style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}>scrivermi,</motion.a>
                                <motion.a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="mx-1 underline underline-offset-2 text-black" style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}>seguirmi</motion.a>
                                o<motion.span
                                    className="underline underline-offset-2 ml-1"
                                    initial={{ color: "#000000", fontWeight: 300 }}
                                    style={{ willChange: "font-weight, color", cursor: "pointer" }}
                                    whileHover={{ fontWeight: 700, color: "#FF0000" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowBlock(true)}
                                >
                                    bloccarmi
                                </motion.span>.
                            </p>
                            <p className="Aktiv-Grotesk-LightItalic mt-3">A te la scelta!</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* SEZIONE MOBILE */}
            <motion.div
                className="block md:hidden px-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                // RIMOSSO once: true -> L'animazione si ripete ogni volta che entri/esci
                viewport={{ margin: "-10%" }}
            >
                <div className="flex flex-col items-center">
                    <motion.h1
                        variants={itemVariants}
                        className="uppercase mb-4 text-center Aktiv-Grotesk-Black"
                        style={{ fontSize: "clamp(35px, 8vw, 50px)" }}
                    >
                        about
                    </motion.h1>

                    <motion.img
                        variants={itemVariants}
                        className="w-3/4 mb-4"
                        src={aboutImg}
                        alt="Profile"
                    />

                    <motion.div
                        variants={itemVariants}
                        className="Aktiv-Grotesk-Light text-center"
                        style={{ fontSize: "clamp(10px, 4vw, 18px)" }}
                    >
                        <p>
                            Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                                Mi nutro di caffè, intuizioni notturne e libri, forse troppi. <br /><br />
                                Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                                Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                                Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist: oggi disegno,
                                domani uncinetto, poi sport, cinema o qualsiasi cosa riesca a catturare la mia curiosità.
                                È qui che per me inizia davvero il processo creativo: quando c’è spazio per costruire, inventare, provare. <br /><br />

                            Se sei arrivato fin qui, puoi
                            <motion.a href="https://www.linkedin.com/in/sara-molino-6604882b3/" target="_blank"
                                className="mx-1 underline underline-offset-2 text-black inline-block transition-all"
                                style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                giudicarmi,
                            </motion.a>
                            <motion.a href="mailto:saramolino35@gmail.com" className="mx-1 underline underline-offset-2 text-black"
                                style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}>scrivermi,</motion.a>
                            <motion.a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="mx-1 underline underline-offset-2 text-black" style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}>seguirmi</motion.a>
                            o <motion.span
                                className="underline underline-offset-2 ml-1"
                                initial={{ color: "#000000", fontWeight: 300 }}
                                style={{ willChange: "font-weight, color", cursor: "pointer" }}
                                whileHover={{ fontWeight: 700, color: "#FF0000" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowBlock(true)}
                            >
                                bloccarmi
                            </motion.span>.
                        </p>
                        <p className="Aktiv-Grotesk-LightItalic mt-3">A te la scelta!</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MODAL UNICO (Classi interne convertite a Tailwind) */}
            <Modal show={showBlock} onHide={() => setShowBlock(false)} centered>
                <div className="p-12 text-center bg-white rounded-[2rem] border-0">
                    <h2 className="Aktiv-Grotesk-Black text-3x uppercase">ops</h2>
                    <p className="Aktiv-Grotesk-Light text-xl">
                        Richiesta respinta, riprova più tardi.
                    </p>
                    <button
                        className="bg-black text-white px-6 py-2 rounded-full shadow-sm hover:bg-zinc-800 transition-colors"
                        onClick={() => setShowBlock(false)}
                    >
                        Ok, ti do un'altra chance
                    </button>
                </div>
            </Modal>

        </section>
    );
};

export default About;