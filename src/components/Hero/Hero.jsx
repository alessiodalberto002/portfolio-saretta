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
    const text = "(think create)";
    const [isMobile, setIsMobile] = useState(false);

    // Gestione responsive per lo switch delle coordinate
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const boxes = [
        // 1. ALTO SINISTRA (Visibile ovunque)
        {
            id: 1, img: copScalo, isMobile: true,
            d: { w: '280px', h: '380px', top: '5%', left: '7%' },
            m: { w: '230px', h: '270px', top: '8%', left: '5%' },
            delay: 0.2, dur: 4
        },
        // 2. ALTO DESTRA (Visibile ovunque)
        {
            id: 2, img: copAmami, isMobile: true,
            d: { w: '240px', h: '320px', top: '8%', left: '72%' },
            m: { w: '230px', h: '270px', top: '15%', left: '53%' },
            delay: 0.5, dur: 5
        },
        // 3. BASSO SINISTRA (Visibile ovunque)
        {
            id: 3, img: imgScalo3, isMobile: true,
            d: { w: '320px', h: '420px', top: '52%', left: '4%' },
            m: { w: '220px', h: '290px', top: '62%', left: '3%' },
            delay: 0.8, dur: 4.5
        },
        // 4. BASSO DESTRA (Visibile ovunque)
        {
            id: 4, img: imgAmami1, isMobile: true,
            d: { w: '280px', h: '360px', top: '58%', left: '60%' },
            m: { w: '230px', h: '270px', top: '58%', left: '52%' },
            delay: 1.1, dur: 6
        },
        // SOLO DESKTOP
        {
            id: 5, img: imgAmami2, isMobile: false,
            d: { w: '400px', h: '250px', top: '10%', left: '33%' },
            delay: 1.4, dur: 5.5
        },
        {
            id: 7, img: img7p1, isMobile: false,
            d: { w: '220px', h: '300px', top: '50%', left: '82%' },
            delay: 1.7, dur: 4.8
        },
        {
            id: 6, img: img7p2, isMobile: false,
            d: { w: '240px', h: '320px', top: '68%', left: '28%' },
            delay: 0.4, dur: 4.2
        },
    ];

    return (
        <section className="vw-100 vh-100 d-flex align-items-center justify-content-center position-relative">

            {boxes.map((box) => (
                <motion.div
                    key={box.id}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0],
                    }}
                    transition={{
                        opacity: { delay: box.delay, duration: 1.5 },
                        y: { duration: box.dur, repeat: Infinity, ease: "easeInOut", delay: box.delay }
                    }}
                    // Nasconde i box non-mobile usando le classi Bootstrap
                    className={`position-absolute shadow-lg ${!box.isMobile ? 'd-none d-lg-block' : 'd-block'}`}
                    style={{
                        zIndex: 1,
                        overflow: 'hidden',
                        // Switch dinamico delle dimensioni/posizione
                        width: isMobile && box.isMobile ? box.m.w : box.d.w,
                        height: isMobile && box.isMobile ? box.m.h : box.d.h,
                        top: isMobile && box.isMobile ? box.m.top : box.d.top,
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

            <div className="container text-center position-relative" style={{ zIndex: 2 }}>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    className="display-1 fw-light text-dark tracking-tight"
                    style={{ letterSpacing: '-0.05em', fontSize: isMobile ? '3.5rem' : 'calc(2.5rem + 4vw)' }}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ delay: index * 0.08 }}
                            className="d-inline-block"
                            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ zIndex: 3 }}>
                <div className="d-flex flex-column align-items-center">
                    <div className="bg-dark" style={{ width: '2px', height: '60px', opacity: 0.1, borderRadius: '20px' }} />
                    <div className="position-absolute top-0 start-50 translate-middle-x w-100" style={{ height: '60px', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ y: ['-100%', '100%'], height: ['20%', '60%', '20%'], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 2.2, ease: [0.65, 0, 0.35, 1], repeatDelay: 0.8 }}
                            className="bg-dark position-absolute start-50 translate-middle-x"
                            style={{ width: '2px', borderRadius: '20px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;