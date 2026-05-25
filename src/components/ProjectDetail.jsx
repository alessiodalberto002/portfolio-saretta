import React, { useState } from "react"; // <--- 1. Importa useState
import { useParams } from "react-router-dom";
import { projectsData } from "../components/projectsData.js";
import { Button, Collapse } from 'react-bootstrap';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === Number(id));

    // 2. Definisci lo stato "open" qui dentro
    const [open, setOpen] = useState(false);

    if (!project) {
        return <div className="container py-5"><h1>Progetto non trovato</h1></div>;
    }

    return (
        <div className="py-5" style={{ marginTop: "80px" }}>
            <div className="d-flex flex-column-reverse flex-md-row">

                {/* COLONNA IMMAGINI */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    {project.video && (
                        <div className="img-size-project-desktop img-size-project-mobile mb-5">
                            <video
                                src={project.video}
                                autoPlay
                                loop
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
                    <div className="sticky-md-top" style={{ top: "120px", zIndex: 10 }}>
                        <h1 className="Aktiv-Grotesk-Black text-uppercase m-0 p-0 fs-1">
                            {project.title}
                        </h1>
                        <h2 className="Aktiv-Grotesk-RegularItalic m-0 p-0 fs-4">
                            {project.subtitle}
                        </h2>
                        <p className="mt-4 Aktiv-Grotesk-Light fs-5">
                            {project.description1}
                        </p>
                        <p className="mt-4 Aktiv-Grotesk-Light fs-5">
                            {project.description2}
                        </p>
                        <p className="mt-4 Aktiv-Grotesk-Light fs-5">
                            {project.description3}
                        </p>

                        {/* BOTTONE A CASCATA */}
                        {/* <div className="stats-wrapper mt-4 bg-dark text-white">
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="stats-collapse-text"
                                aria-expanded={open}
                                variant="link"
                                className="p-2 text-decoration-none Aktiv-Grotesk-Black text-white fs-5 d-flex align-items-center"
                            >
                                <h1 className="Aktiv-Grotesk-Black fs-3 ms-2 my-0 p-0">{open ? 'I RISULTATI' : 'I RISULTATI'}</h1>
                                <span style={{
                                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                    display: 'inline-block',
                                    marginLeft: '10px'
                                }}>
                                    <i class="fa-solid fa-angle-down fs-2"></i>
                                </span>
                            </Button>

                            <Collapse in={open}>
                                <div id="stats-collapse-text">
                                    <div className="stats-container py-2 px-3">
                                        {project.interazioni && (
                                            <p className="Aktiv-Grotesk-Black fs-2 mb-1 pt-2">
                                                {project.interazioni}
                                                {project.time && (
                                                    <span className="Aktiv-Grotesk-Regular fs-4"> {project.time}</span>
                                                )}
                                            </p>
                                        )}

                                        {project.visualizzazioni && (
                                            <p className="Aktiv-Grotesk-Black fs-2">
                                                {project.visualizzazioni}
                                                {project.time && (
                                                    <span className="Aktiv-Grotesk-Regular fs-4"> {project.time}</span>
                                                )}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Collapse>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;