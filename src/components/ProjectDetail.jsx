import { useParams } from "react-router-dom";
import { projectsData } from "../components/projectsData.js";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === Number(id));

    if (!project) {
        return <div className="container py-5"><h1>Progetto non trovato</h1></div>;
    }

    return (
        <div className="py-5" style={{ marginTop: "80px" }}>
            {/* 
                flex-column-reverse: mette il testo (seconda colonna nel codice) sopra le immagini su mobile.
                flex-md-row: riporta le immagini a sinistra e il testo a destra su desktop.
            */}
            <div className="d-flex flex-column-reverse flex-md-row">

                {/* COLONNA IMMAGINI */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    {project.video && (
                        <div className="img-size-project-desktop img-size-project-mobile mb-5">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-fit-cover h-100 w-100">
                            </video>
                        </div>
                    )}

                    {project.gallery && project.gallery.map((img, index) => (
                        <div key={index} className="img-size-project-desktop img-size-project-mobile mb-5">
                            <img
                                src={img}
                                alt={`${project.name} - ${index}`}
                                className="object-fit-cover h-100 w-100"
                            />
                        </div>
                    ))}
                </div>

                {/* COLONNA TESTO */}
                <div className="col-12 col-md-6 mb-5 mb-md-0 padding-text-desktop padding-text-mobile">
                    {/* 
                        sticky-md-top: attivo solo da desktop (md) in su.
                        Su mobile il div segue il flusso naturale in cima alla pagina.
                    */}
                    <div className="sticky-md-top" style={{ top: "120px", zIndex: 10 }}>
                        <h1 className="Aktiv-Grotesk-Black text-uppercase m-0 p-0 fs-1">
                            {project.title}
                        </h1>
                        <h2 className="Aktiv-Grotesk-RegularItalic m-0 p-0 fs-4">
                            {project.subtitle}
                        </h2>
                        <p className="mt-4 Aktiv-Grotesk-Light fs-5">
                            {project.description}
                        </p>

                        <div className="stats-container mt-4">
                            {project.interazioni && (
                                <p className="Aktiv-Grotesk-Black fs-3 mb-1">
                                    {project.interazioni}
                                    {project.time && <span className="Aktiv-Grotesk-RegularItalic"> {project.time}</span>}
                                </p>
                            )}

                            {project.visualizzazioni && (
                                <p className="Aktiv-Grotesk-Black fs-3">
                                    {project.visualizzazioni}
                                    {project.time && <span className="Aktiv-Grotesk-RegularItalic"> {project.time}</span>}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;