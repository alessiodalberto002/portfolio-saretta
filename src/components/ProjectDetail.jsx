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
                <div className="w-full md:w-1/2 mb-12 md:mb-0 padding-text-desktop padding-text-mobile">
                    <div className="md:sticky" style={{ top: "120px", zIndex: 10 }}>
                        <h1 className="Aktiv-Grotesk-Black uppercase m-0 p-0 text-4xl md:text-5xl">
                            {project.title}
                        </h1>
                        <h2 className="Aktiv-Grotesk-RegularItalic m-0 p-0 text-xl">
                            {project.subtitle}
                        </h2>
                        <p className="mt-4 Aktiv-Grotesk-Light text-[18px]">
                            {project.description1}
                        </p>
                        <p className="mt-4 Aktiv-Grotesk-Light text-[18px]">
                            {project.description2}
                        </p>
                        <p className="mt-4 Aktiv-Grotesk-Light text-[18px]">
                            {project.description3}
                        </p>

                        {/* BOTTONE A CASCATA (Classi convertite pronte all'uso) */}
                        {/* <div className="stats-wrapper mt-4 bg-black text-white">
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="stats-collapse-text"
                                aria-expanded={open}
                                variant="link"
                                className="p-2 no-underline Aktiv-Grotesk-Black text-white text-xl flex items-center"
                            >
                                <h1 className="Aktiv-Grotesk-Black text-3xl ml-2 my-0 p-0">{open ? 'I RISULTATI' : 'I RISULTATI'}</h1>
                                <span style={{
                                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                    display: 'inline-block',
                                    marginLeft: '10px'
                                }}>
                                    <i className="fa-solid fa-angle-down text-4xl"></i>
                                </span>
                            </Button>

                            <Collapse in={open}>
                                <div id="stats-collapse-text">
                                    <div className="stats-container py-2 px-3">
                                        {project.interazioni && (
                                            <p className="Aktiv-Grotesk-Black text-3xl mb-1 pt-2">
                                                {project.interazioni}
                                                {project.time && (
                                                    <span className="Aktiv-Grotesk-Regular text-xl"> {project.time}</span>
                                                )}
                                            </p>
                                        )}

                                        {project.visualizzazioni && (
                                            <p className="Aktiv-Grotesk-Black text-3xl">
                                                {project.visualizzazioni}
                                                {project.time && (
                                                    <span className="Aktiv-Grotesk-Regular text-xl"> {project.time}</span>
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