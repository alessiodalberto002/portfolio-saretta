import SingleProject from "./SingleProject";
import { projectsData } from "../projectsData"; // Controlla bene il percorso qui!
import { section } from "framer-motion/client";

const ProjectList = () => {
    return (
        <section id="portfolio">
            <div className="container min-h-screen flex flex-col items-center justify-content-center bg-white padding-desktop padding-mobile">
                <div className="mx-auto" style={{ width: '100%' }}>
                    <h1 className="text-center uppercase mb-5 Aktiv-Grotesk-Black" style={{ fontSize: "50px" }}>
                        portfolio
                    </h1>
                    
                    {/* Sostituito il sistema row/col di Bootstrap con CSS Grid di Tailwind */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        {projectsData.map((project) => (
                            <div key={project.id}>
                                <SingleProject
                                    id={project.id}
                                    image={project.image_cop}
                                    name={project.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;