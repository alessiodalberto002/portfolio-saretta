const About = () => {
    return (
        <>
            {/* SEZIONE DESKTOP: visibile solo da tablet (md) in su */}
            <div id="about" className="vh-100 d-none d-md-block">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h1 className="text-uppercase mb-5 text-center Aktiv-Grotesk-Black" style={{ fontSize: "50px" }}>about me</h1>

                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <img className="w-25" src="../src/assets/img/dolcina.gif" alt="" />
                        <div className="flex-column w-25 Aktiv-Grotesk-Light" style={{ fontSize: "20px" }}>
                            <p className="fw-light">Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare. Mi nutro di caffè, intuizioni notturne e libri, forse troppi.</p>
                            <p className="fw-light">Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni. Mi piacciono le tele bianche e i punti di partenza.</p>
                            <p className="fw-light">Se cerchi qualcuno che sappia dare un senso al caos visivo (e sopravvivere a 37 versioni dello stesso progetto), eccomi. Prometto creatività, pazienza (non troppa) e tanti tanti sticker.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEZIONE MOBILE: visibile solo su schermi piccoli, nascosta da md in su */}
            <div className="vh-100 d-block d-md-none">
                <div className="d-flex flex-column justify-content-center align-items-center h-100 px-3">
                    <h1 className="text-uppercase mb-5 text-center Aktiv-Grotesk-Black"
                        style={{ fontSize: "clamp(35px, 8vw, 50px)" }}>
                        about me
                    </h1>

                    <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <img className="w-75" src="../src/assets/img/dolcina.gif" alt="" />

                        <div className="d-flex flex-column w-100 Aktiv-Grotesk-Light"
                            style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
                            <p className="fw-light">Fuori da Photoshop sono un costante work in progress, ma davanti a un pc so esattamente cosa fare. Mi nutro di caffè, intuizioni notturne e libri, forse troppi.</p>
                            <p className="fw-light">Mi piacciono le sfide, mi piace raccontare, perdermi tra pensieri e colori e trovare soluzioni. Mi piacciono le tele bianche e i punti di partenza.</p>
                            <p className="fw-light">Se cerchi qualcuno che sappia dare un senso al caos visivo (e sopravvivere a 37 versioni dello stesso progetto), eccomi. Prometto creatività, pazienza (non troppa) e tanti tanti sticker.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;