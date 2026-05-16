import { Link } from "react-router-dom";

const SingleProject = ({ id, image, name }) => {
    return (
        // Usiamo Link al posto del div esterno o dentro di esso
        <Link to={`/project/${id}`} className="text-decoration-none text-dark">
            <div className="project-card w-100 border">
                <div
                    className="overflow-hidden d-flex flex-column"
                    style={{ width: '100%' }}
                >
                    <img
                        className="w-100 object-fit-cover"
                        style={{ height: "85%" }}
                        src={image}
                        alt={name}
                    />
                    <div className="d-flex align-items-center bg-white" style={{ height: "15%" }}>
                        <p className="Aktiv-Grotesk-Light px-2 text-uppercase mb-0 text-truncate py-3"
                            style={{ fontSize: '20px', letterSpacing: '0.5px' }}>
                            {name}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleProject