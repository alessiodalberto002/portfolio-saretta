import imgMethods from "../../assets/img/gif2.gif"

const Methods = () => {

    return (
        <div className="container h-screen">
            <div className="flex flex-col md:flex-row justify-center items-center h-full text-center md:text-left">

                {/* Titolo: margin-bottom su mobile, margin-right su desktop */}
                <h1 className="uppercase Aktiv-Grotesk-Black m-0 p-0"
                    style={{ fontSize: "clamp(60px, 8vw, 75px)" }}>
                    come lavoro
                </h1>

                {/* Gruppo GIF con parentesi */}
                <div className="flex items-center justify-center p-4">
                    <h1 className="uppercase Aktiv-Grotesk-Black m-0 p-0"
                        style={{ fontSize: "clamp(40px, 8vw, 70px)" }}>(</h1>

                    <img
                        src={imgMethods}
                        alt=""
                        className="w-full h-auto"
                        style={{ maxWidth: "600px" }}
                    />

                    <h1 className="uppercase Aktiv-Grotesk-Black m-0 p-0"
                        style={{ fontSize: "clamp(40px, 8vw, 75px)" }}>)</h1>
                </div>

            </div>
        </div>
    )
}

export default Methods