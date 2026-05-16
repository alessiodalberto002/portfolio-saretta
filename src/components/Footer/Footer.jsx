const Footer = () => {

    return (
        <>
            <div id="contact" className="container p-3">
                {/* Su mobile in colonna e centrato, su desktop in riga con spazio tra gli elementi */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 gap-md-0">
                    <p className="m-0 text-uppercase Aktiv-Grotesk-Black">sara molino</p>
                    <a href="mailto:saramolino35@gmail.com<" className="m-0 Aktiv-Grotesk-Light text-dark">saramolino35@gmail.com</a>

                    <div className="d-flex justify-content-between align-items-center gap-3 fs-4">
                        <a href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/sara-molino-6604882b3/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                {/* Testo finale centrato su mobile per estetica, mantenuto normale su desktop */}
                <a href="#" className="Aktiv-Grotesk-Light text-dark text-center text-md-start mt-3 mt-md-2">
                    Twinkle twinkle little design, how I wonder what you'll shine! Up above the page so high, ideas sparkling in my eye.
                </a>
            </div>
        </>
    )
}

export default Footer