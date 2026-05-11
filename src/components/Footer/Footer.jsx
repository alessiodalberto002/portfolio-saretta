const Footer = () => {

    return (
        <>
            <div id="contact" className="container p-3">
                {/* Su mobile in colonna e centrato, su desktop in riga con spazio tra gli elementi */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 gap-md-0">
                    <p className="m-0 text-uppercase Aktiv-Grotesk-Black">sara molino</p>
                    <p className="m-0 Aktiv-Grotesk-Light">saretta35213@gmail.com</p>

                    <div className="d-flex justify-content-between align-items-center gap-3 fs-4">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>

                {/* Testo finale centrato su mobile per estetica, mantenuto normale su desktop */}
                <p className="Aktiv-Grotesk-Light text-center text-md-start mt-3 mt-md-2">
                    Twinkle twinkle little design, how I wonder what you'll shine! Up above the page so high, ideas sparkling in my eye.
                </p>
            </div>
        </>
    )
}

export default Footer