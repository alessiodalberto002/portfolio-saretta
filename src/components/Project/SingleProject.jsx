import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleProject = ({ id, image, name }) => {
    return (
        <Link to={`/project/${id}`} className="no-underline text-black block">
            <motion.div
                className="project-card w-full border"
                // ANIMAZIONE AL REALE INGRESSO NELLA VIEWPORT (SCROLL)
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                // RIMOSSO once: true -> L'effetto si ripete ogni volta che la card rientra nello scroll
                viewport={{ margin: "-20% 0px" }}
                transition={{
                    duration: 0.6, // Leggermente più veloce per rendere il loop dello scroll più reattivo
                    ease: [0.215, 0.610, 0.355, 1.000]
                }}
                // EFFETTI HOVER E CLICK
                whileHover={{
                    y: -6,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
            >
                <div
                    className="overflow-hidden flex flex-col"
                    style={{ width: '100%' }}
                >
                    <div className="overflow-hidden" style={{ height: "85%" }}>
                        <img
                            className="w-full h-full object-cover"
                            src={image}
                            alt={name}
                        />
                    </div>

                    <div className="flex items-center bg-white" style={{ height: "15%" }}>
                        <p className="Aktiv-Grotesk-Light px-2 uppercase m-0 truncate py-3"
                            style={{ fontSize: '20px', letterSpacing: '0.5px' }}>
                            {name}
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default SingleProject;