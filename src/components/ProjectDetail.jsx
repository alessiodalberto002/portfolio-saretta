import React, { useState } from "react"; // <--- 1. Importa useState
import { useParams } from "react-router-dom";
import { projectsData } from "../components/projectsData.js";
import { motion } from "framer-motion";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === Number(id));

    // 2. Definisci lo stato "open" qui dentro
    const [open, setOpen] = useState(false);

    if (!project) {
        return <div className="container py-12"><h1>Progetto non trovato</h1></div>;
    }

    return (
        <div className="pt-4 md:py-12" style={{ marginTop: "80px" }}>
            <div className="flex flex-col-reverse md:flex-row">

                {/* COLONNA IMMAGINI */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    {project.video && (
                        <div className="img-size-project-desktop img-size-project-mobile mb-12 mt-12 md:mt-0">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                playsInline
                                controls
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

                        <div className="space-y-6 text-[16px] md:text-[18px] text-zinc-800 leading-thight mt-4 pb-4">
                            {project.description1 && <p>{project.description1}</p>}
                            {project.description2 && <p>{project.description2}</p>}
                            {project.description3 && <p>{project.description3}</p>}
                            {project.description4 && <p>{project.description4}</p>}
                            {project.description5 && <p>{project.description5}</p>}
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {project.tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="px-3 py-1.5 md:px-4 md:py-2 text-md md:text-base bg-black text-white whitespace-nowrap uppercase"
                                    whileHover={{ y: -5, rotate: 5 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;