import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import immagini
import copScalo from "../../assets/img/scalo/14_luglio_copertina.jpg"
import copAmami from "../../assets/img/amami/02.png"
import imgScalo3 from "../../assets/img/scalo/03_ottobre.png"
import imgAmami1 from "../../assets/img/amami/01.png"
import imgAmami2 from "../../assets/img/amami/02.png"
import img7p1 from "../../assets/img/7p/01.png"
import img7p2 from "../../assets/img/7p/02 (1).png"

const Hero = () => {
    const text = "think, create";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const boxes = [
        // 1. ALTO SINISTRA - Presente in entrambi, ma ridimensionato per mobile
        {
            id: 1, img: copScalo, isMobile: true,
            d: { w: '280px', h: '380px', top: '5%', left: '7%' },
            m: { w: '180px', h: '230px', top: '10%', left: '5%' },
            delay: 0.2, dur: 4
        },
        // 2. CENTRO DESTRA - Solo desktop (per evitare sovrapposizioni su mobile)
        {
            id: 2, img: copAmami, isMobile: false,
            d: { w: '240px', h: '320px', top: '8%', left: '72%' },
            delay: 0.5, dur: 5
        },
        // 3. BASSO SINISTRA - Presente in entrambi
        {
            id: 3, img: imgScalo3, isMobile: true,
            d: { w: '320px', h: '420px', top: '52%', left: '4%' },
            m: { w: '200px', h: '260px', top: '58%', left: '8%' },
            delay: 0.8, dur: 4.5
        },
        // 4. ALTO DESTRA - Usato come 3° immagine mobile per bilanciare l'id:1
        {
            id: 4, img: imgAmami1, isMobile: true,
            d: { w: '280px', h: '360px', top: '58%', left: '60%' },
            m: { w: '150px', h: '220px', top: '20%', left: '60%' },
            delay: 1.1, dur: 6
        },
        // ALTRI SOLO DESKTOP
        { id: 5, img: imgAmami2, isMobile: false, d: { w: '400px', h: '250px', top: '10%', left: '33%' }, delay: 1.4, dur: 5.5 },
        { id: 7, img: img7p1, isMobile: false, d: { w: '220px', h: '300px', top: '50%', left: '82%' }, delay: 1.7, dur: 4.8 },
        { id: 6, img: img7p2, isMobile: false, d: { w: '240px', h: '320px', top: '68%', left: '28%' }, delay: 0.4, dur: 4.2 },
    ];

    return (
        <section className="vw-100 vh-100 bg-white d-flex align-items-center justify-content-center position-relative">

            {boxes.map((box) => (
                <motion.div
                    key={box.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: isMobile ? [0, -10, 0] : [0, -20, 0], // Movimento ridotto su mobile per non disturbare lo scroll
                    }}
                    transition={{
                        opacity: { delay: box.delay, duration: 1 },
                        y: { duration: box.dur, repeat: Infinity, ease: "easeInOut", delay: box.delay }
                    }}
                    className={`position-absolute ${!box.isMobile ? 'd-none d-lg-block' : 'd-block'}`}
                    style={{
                        zIndex: 1,
                        overflow: 'hidden',
                        borderRadius: '2px',
                        width: isMobile && box.m ? box.m.w : box.d.w,
                        height: isMobile && box.m ? box.m.h : box.d.h,
                        top: isMobile && box.m ? box.m.top : box.d.top,
                        left: isMobile && box.isMobile ? box.m.left : box.d.left,
                    }}
                >
                    <img
                        src={box.img}
                        alt="Project"
                        className="w-100 h-100 object-fit-cover"
                    />
                </motion.div>
            ))}

            {/* TESTO CENTRALE */}
            <div className="container-fluid text-center position-relative" style={{ zIndex: 10 }}>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    className="fw-light text-dark tracking-tight m-0 text-uppercase"
                    style={{
                        letterSpacing: '-0.05em',
                        fontSize: isMobile ? '2.8rem' : 'calc(2rem + 5vw)',
                        lineHeight: 1
                    }}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ delay: index * 0.05 + 0.5, duration: 0.8, ease: "circOut" }}
                            className="d-inline-block"
                            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            {/* SCROLL INDICATOR - Rinforzato per visibilità mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="position-absolute bottom-0 start-50 translate-middle-x mt-5"
                style={{ zIndex: 20 }}
            >
                <div className="d-flex flex-column align-items-center">
                    <div className="bg-dark" style={{ width: '2px', height: '50px', opacity: 0.2 }} />
                    <div className="position-absolute top-0 w-100" style={{ height: '50px', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ y: [-50, 50] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                            className="bg-dark mx-auto"
                            style={{ width: '2px', height: '100%' }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;