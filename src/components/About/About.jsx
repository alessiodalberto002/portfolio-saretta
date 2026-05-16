import React, { useState } from 'react'; // <--- MANCAVA QUESTO
import aboutImg from "../../assets/img/dolcina.gif";
import { Modal } from 'react-bootstrap';

const About = () => {
    // 1. Definiamo lo stato per il Modal
    const [showBlock, setShowBlock] = useState(false);

    return (
        <section id="about" className="min-vh-100 w-100" style={{padding:"150px 0"}}>

            {/* SEZIONE DESKTOP */}
            <div className="d-none d-md-block h-100">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h1 className="text-uppercase mb-5 text-center Aktiv-Grotesk-Black" style={{ fontSize: "50px" }}>
                        about me
                    </h1>

                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <img className="w-25" src={aboutImg} alt="Profile" />

                        <div className="w-25 Aktiv-Grotesk-Light" style={{ fontSize: "20px" }}>
                            <p>
                                Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                                Mi nutro di caffè, intuizioni notturne e libri, forse troppi.
                                Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                                Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                                Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist...
                                oggi disegno, domani uncinetto, poi sport.
                                È qui che per me inizia davvero il processo creativo.<br /><br />
                                Ora che hai letto di me, puoi <a href="https://linkedin.com" target="_blank" className=" mx-1 text-decoration-underline  text-dark">giudicarmi,</a>
                                <a href="mailto:tua@email.it" className=" mx-1 text-decoration-underline  text-dark">scrivermi,</a>
                                <a href="https://instagram.com" target="_blank" className=" mx-1 text-decoration-underline  text-dark">seguirmi</a>
                                o <span className="text-dark text-decoration-underline ms-1" style={{ cursor: 'pointer' }} onClick={() => setShowBlock(true)}>bloccarmi</span>.
                            </p>
                            <p className="Aktiv-Grotesk-LightItalic mt-3">A te la scelta!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEZIONE MOBILE */}
            <div className="d-block d-md-none px-3">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="text-uppercase mb-4 text-center Aktiv-Grotesk-Black" style={{ fontSize: "clamp(35px, 8vw, 50px)" }}>
                        about me
                    </h1>
                    <img className="w-75 mb-4" src={aboutImg} alt="Profile" />
                    <div className="Aktiv-Grotesk-Light text-center" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
                        <p>
                            Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare.
                            Mi nutro di caffè, intuizioni notturne e libri, forse troppi.
                            Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni.
                            Mi piacciono le tele bianche e i punti di partenza. <br /><br />
                            Tra un progetto e l’altro cambio interessi con la stessa facilità con cui cambio playlist...
                            oggi disegno, domani uncinetto, poi sport.
                            È qui che per me inizia davvero il processo creativo.<br /><br />
                            Ora che hai letto di me, puoi <a href="https://linkedin.com" target="_blank" className="fw-bold mx-1 text-decoration-underline text-dark">giudicarmi</a>,
                            <a href="mailto:tua@email.it" className="fw-bold mx-1 text-decoration-underline text-dark">scrivermi</a>,
                            <a href="https://instagram.com" target="_blank" className="fw-bold mx-1 text-decoration-underline text-dark">seguirmi</a>
                            o semplicemente <span className="text-danger fw-bold text-uppercase ms-1" style={{ cursor: 'pointer' }} onClick={() => setShowBlock(true)}>bloccarmi</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* MODAL UNICO (Fuori dai div condizionali così non si duplica) */}
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