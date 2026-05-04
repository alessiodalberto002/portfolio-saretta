import imgHero from "../../assets/img/Screenshot 2026-03-15 alle 15.01.59.png"

const Hero = () => {
    return (
        <section id="Home" className="vh-100 w-100 d-flex justify-content-center align-items-center overflow-hidden position-relative">

            {/* Container principale */}
            <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 w-100">

                {/* Immagine: h-75 su desktop, un po' più piccola su mobile per far spazio al testo */}
                <div className="col-10 col-lg-auto h-75 h-lg-75">
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src={imgHero}
                        alt="Hero"
                    />
                </div>

                {/* "Think" */}
                <h1 className="text-uppercase Aktiv-Grotesk-Thin hero-text position-absolute"
                    style={{
                        zIndex: 2,
                        // Desktop logic: le tue coordinate originali
                        // Mobile logic: centrato orizzontalmente e posizionato in alto
                    }}>
                    Think
                </h1>

                {/* "Create" */}
                <h1 className="text-uppercase Aktiv-Grotesk-Thin hero-text position-absolute"
                    style={{
                        zIndex: 2,
                        // Desktop logic: le tue coordinate originali
                        // Mobile logic: centrato orizzontalmente e posizionato subito sotto Think
                    }}>
                    Create
                </h1>

            </div>

        </section>
    );
};

export default Hero;