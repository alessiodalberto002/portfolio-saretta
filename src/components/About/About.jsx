import React, { useState } from 'react';
import aboutImg from "../../assets/img/dolcina.gif";
import { Modal } from 'react-bootstrap';
import { motion } from "framer-motion";

const About = () => {
    const [showBlock, setShowBlock] = useState(false);

    return (
        // Rimosso min-h-screen: usiamo py per dare respiro senza forzare l'altezza
        <section id="about" className="w-full py-20 px-6 md:px-12">
            <motion.div
                className="w-full max-w-5xl mx-auto flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-10%" }}
            >
                {/* TITOLO */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="uppercase mb-12 text-center Aktiv-Grotesk-Black text-[clamp(35px,6vw,50px)]"
                >
                    about
                </motion.h1>

                {/* CONTENITORE PRINCIPALE: allineamento verticale per schermi piccoli */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16 mt-12">

                    {/* IMMAGINE: Max-width controllata per evitare che sovrasti il testo */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-full max-w-[280px] lg:max-w-[420px] flex-shrink-0"
                    >
                        <img src={aboutImg} alt="Profile" className="w-full h-auto object-contain" />
                    </motion.div>

                    {/* TESTO: Altezza massima gestibile se il contenuto è troppo lungo */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="w-full lg:w-[50%] Aktiv-Grotesk-Light text-left text-[15px] text-md-[18px] leading-relaxed"
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
                            {['giudicarmi,', 'scrivermi,', 'seguirmi'].map((text, i) => (
                                <motion.a
                                    key={i}
                                    href={i === 0 ? "https://www.linkedin.com/in/sara-molino-6604882b3/" : i === 1 ? "mailto:saramolino35@gmail.com" : "https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                                    target="_blank"
                                    className="mx-1 underline underline-offset-2 text-black inline-block font-medium hover:font-bold transition-all"
                                >
                                    {text}
                                </motion.a>
                            ))}
                            o<span
                                className="underline underline-offset-2 ml-1 cursor-pointer font-medium hover:font-bold hover:text-red-600 transition-all"
                                onClick={() => setShowBlock(true)}
                            >
                                bloccarmi
                            </span>.
                        </p>
                        <p className="Aktiv-Grotesk-LightItalic mt-4">A te la scelta!</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MODAL */}
            <Modal show={showBlock} onHide={() => setShowBlock(false)} centered>
                <div className="p-8 text-center bg-white rounded-[2rem]">
                    <h2 className="Aktiv-Grotesk-Black text-2xl uppercase mb-3">ops</h2>
                    <p className="Aktiv-Grotesk-Light mb-6">Richiesta respinta, riprova più tardi.</p>
                    <button
                        className="bg-black text-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors"
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