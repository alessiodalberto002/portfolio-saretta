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
        <section id="about" className="min-vh-100 w-100" style={{ padding: "150px 0" }}>

            {/* SEZIONE DESKTOP */}
            <motion.div
                className="d-none d-md-block h-100"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                // RIMOSSO once: true -> L'animazione si ripete ogni volta che entri/esci
                viewport={{ margin: "-15%" }}
            >
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <motion.h1
                        variants={itemVariants}
                        className="text-uppercase mb-5 text-center Aktiv-Grotesk-Black"
                        style={{ fontSize: "50px" }}
                    >
                        about me
                    </motion.h1>

                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <motion.img
                            variants={itemVariants}
                            className="w-25"
                            src={aboutImg}
                            alt="Profile"
                        />

                        <motion.div
                            variants={itemVariants}
                            className="w-25 Aktiv-Grotesk-Light"
                            style={{ fontSize: "20px" }}
                        >
                            <p>
                                Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                                Mi nutro di caffè, intuizioni notturne e libri, forse troppi.
                                Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                                Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                                Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist:
                                oggi disegno, domani uncinetto, poi sport.
                                È qui che per me inizia davvero il processo creativo.<br /><br />
                                Ora che hai letto di me, puoi
                                <motion.a href="https://www.linkedin.com/in/sara-molino-6604882b3/" target="_blank"
                                    className="mx-1 text-decoration-underline text-dark d-inline-block transition-all"
                                    style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    giudicarmi,
                                </motion.a>
                                <motion.a href="mailto:saramolino35@gmail.com" className=" mx-1 text-decoration-underline text-dark"
                                    style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}>scrivermi,</motion.a>
                                <motion.a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className=" mx-1 text-decoration-underline  text-dark" style={{ fontWeight: 300, willChange: "font-weight" }}
                                    whileHover={{ fontWeight: 700 }}
                                    whileTap={{ scale: 0.95 }}>seguirmi</motion.a>
                                o <motion.span
                                    className="text-decoration-underline ms-1"
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
                className="d-block d-md-none px-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                // RIMOSSO once: true -> L'animazione si ripete ogni volta che entri/esci
                viewport={{ margin: "-10%" }}
            >
                <div className="d-flex flex-column align-items-center">
                    <motion.h1
                        variants={itemVariants}
                        className="text-uppercase mb-4 text-center Aktiv-Grotesk-Black"
                        style={{ fontSize: "clamp(35px, 8vw, 50px)" }}
                    >
                        about me
                    </motion.h1>

                    <motion.img
                        variants={itemVariants}
                        className="w-75 mb-4"
                        src={aboutImg}
                        alt="Profile"
                    />

                    <motion.div
                        variants={itemVariants}
                        className="Aktiv-Grotesk-Light text-center"
                        style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
                    >
                        <p>
                            Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                            Mi nutro di caffè, intuizioni notturne e libri, forse troppi.
                            Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                            Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                            Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist:
                            oggi disegno, domani uncinetto, poi sport.
                            È qui che per me inizia davvero il processo creativo.<br /><br />
                            Ora che hai letto di me, puoi
                            <motion.a href="https://www.linkedin.com/in/sara-molino-6604882b3/" target="_blank"
                                className="mx-1 text-decoration-underline text-dark d-inline-block transition-all"
                                style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                giudicarmi,
                            </motion.a>
                            <motion.a href="mailto:saramolino35@gmail.com" className=" mx-1 text-decoration-underline text-dark"
                                style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}>scrivermi,</motion.a>
                            <motion.a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className=" mx-1 text-decoration-underline  text-dark" style={{ fontWeight: 300, willChange: "font-weight" }}
                                whileHover={{ fontWeight: 700 }}
                                whileTap={{ scale: 0.95 }}>seguirmi</motion.a>
                            o <motion.span
                                className="text-decoration-underline ms-1"
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

            {/* MODAL UNICO */}
            <Modal show={showBlock} onHide={() => setShowBlock(false)} centered>
                <div className="p-5 text-center bg-white rounded-5 border-0">
                    <h2 className="Aktiv-Grotesk-Black mb-3">Aspetta! 🛑</h2>
                    <p className="Aktiv-Grotesk-Light fs-5">
                        Perché vuoi bloccarmi? Sono i font troppo grandi o è la mia ossessione per l'uncinetto? Ps: se mi blocchi mi offendo (forse).
                    </p>
                    <button
                        className="btn btn-dark mt-4 px-4 rounded-pill shadow-sm"
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