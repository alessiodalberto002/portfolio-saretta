
// Importa le tue foto (ne servono almeno 4-5 per l'effetto loop)
import copScalo from "../../assets/img/scalo/14_luglio_copertina.jpg"
import copAmami from "../../assets/img/amami/02.png"
import imgScalo3 from "../../assets/img/scalo/03_ottobre.png"
import imgAmami1 from "../../assets/img/amami/01.png"
import imgAmami2 from "../../assets/img/amami/02.png"
import img7p1 from "../../assets/img/7p/01.png"
import img7p2 from "../../assets/img/7p/02 (1).png"

const Hero = () => {
    const originalPhotos = [copScalo, imgScalo3, copAmami, imgAmami1, imgAmami2, img7p1, img7p2];
    const photos = [...originalPhotos, ...originalPhotos, ...originalPhotos]; // Triplicarle è solitamente sufficiente

    return (
        <section id="Home" className="hero-minimal-fixed">
            <div className="hero-content-wrapper">
                <div className="hero-slider-container">
                    <div className="hero-slider-track">
                        {photos.map((src, index) => (
                            <div key={index} className="hero-slide">
                                <img src={src} alt={`Work ${index}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-footer">
                    <h1 className="hero-title fw-lighter text-uppercase m-0">(Think Create)</h1>
                </div>
            </div>
        </section>
    );
};
export default Hero;
