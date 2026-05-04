import imgMethods from "../../assets/img/gif2.gif"

const Methods = () => {

    return (
        <div className="container vh-100">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center h-100 text-center text-md-start">

                {/* Titolo: margin-bottom su mobile, margin-right su desktop */}
                <h1 className="text-uppercase Aktiv-Grotesk-Black mb-4 mb-md-0 me-md-4"
                    style={{ fontSize: "clamp(60px, 8vw, 75px)" }}>
                    come lavoro
                </h1>

                {/* Gruppo GIF con parentesi */}
                <div className="d-flex align-items-center justify-content-center p-4">
                    <h1 className="text-uppercase Aktiv-Grotesk-Black m-0 p-0"
                        style={{ fontSize: "clamp(40px, 8vw, 70px)" }}>(</h1>

                    <img
                        src={imgMethods}
                        alt=""
                        className="img-fluid"
                        style={{ maxWidth: "600px", width: "100%" }}
                    />

                    <h1 className="text-uppercase Aktiv-Grotesk-Black m-0 p-0"
                        style={{ fontSize: "clamp(40px, 8vw, 75px)" }}>)</h1>
                </div>

            </div>
        </div>
    )
}

export default Methods