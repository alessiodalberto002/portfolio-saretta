
// Importa le tue foto (ne servono almeno 4-5 per l'effetto loop)
import copScalo from "../../assets/img/scalo/14_luglio_copertina.jpg"
import copAmami from "../../assets/img/amami/02.png"
import imgScalo3 from "../../assets/img/scalo/03_ottobre.png"
import imgAmami1 from "../../assets/img/amami/01.png"
import imgAmami2 from "../../assets/img/amami/02.png"
import img7p1 from "../../assets/img/7p/01.png"
import img7p2 from "../../assets/img/7p/02 (1).png"

const Hero = () => {
    // Array originale delle immagini
    const originalPhotos = [copScalo, imgScalo3, copAmami, imgAmami1, imgAmami2, img7p1, img7p2];

    // Duplichiamo l'array una volta sola per permettere il loop fluido
    const photos = [...originalPhotos, ...originalPhotos, ...originalPhotos, ...originalPhotos, ...originalPhotos, ...originalPhotos];

    return (
        <section id="Home" className="hero-minimal w-100 mt-4">

            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="hero-slider-container">
                    <div className="hero-slider-track">
                        {photos.map((src, index) => (
                            <div key={index} className="hero-slide">
                                <img src={src} alt={`Work ${index}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-footer w-100 d-flex justify-content-end pe-4 pe-lg-5">
                    <h1 className="hero-title fw-lighter text-uppercase m-0">(Think Create)</h1>
                </div>
            </div>

        </section>
    );
};

export default Hero;
