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
        return <div className="container py-12"><h1>Progetto non trovato</h1></div>;
    }

    return (
        <div className="py-12" style={{ marginTop: "80px" }}>
            <div className="flex flex-col-reverse md:flex-row">

                {/* COLONNA IMMAGINI */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    {project.video && (
                        <div className="img-size-project-desktop img-size-project-mobile mb-12">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                playsInline
                                className="object-cover h-full w-full">
                            </video>
                        </div>
                    )}

                    {project.gallery && project.gallery.map((img, index) => (
                        <div key={index} className="img-size-project-desktop img-size-project-mobile mb-12">
                            <img
                                src={img}
                                alt={`${project.name} - ${index}`}
                                className="object-cover h-full w-full"
                            />
                        </div>
                    ))}
                </div>

                {/* COLONNA TESTO */}
                <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-8">

                    <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-8">

                        <h1 className="Aktiv-Grotesk-Black uppercase text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] m-0 p-0">
                            {project.title}
                        </h1>

                        <h2 className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl mt-2 mb-8">
                            {project.subtitle}
                        </h2>

                        <div className="space-y-6 text-[16px] md:text-[18px] Aktiv-Grotesk-Light text-zinc-800 leading-relaxed pb-20">
                            {project.description1 && <p>{project.description1}</p>}
                            {project.description2 && <p>{project.description2}</p>}
                            {project.description3 && <p>{project.description3}</p>}

                            {/* Aggiunto spazio extra in fondo per evitare che 
                il contenuto venga tagliato su schermi piccoli */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;