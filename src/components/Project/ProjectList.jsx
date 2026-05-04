import SingleProject from "./SingleProject";
import { projectsData } from "../projectsData"; // Controlla bene il percorso qui!

const ProjectList = () => {
    return (
        <div className="container d-flex flex-column justify-content-center bg-white py-5">
            <div className="mx-auto" style={{ maxWidth: '900px', width: '100%' }}>
                <h1 className="text-center text-uppercase mb-4 Aktiv-Grotesk-Black" style={{ fontSize: "50px" }}>
                    work
                </h1>
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {projectsData.map((project) => (
                        <div key={project.id} className="col">
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
    );
};

export default ProjectList;