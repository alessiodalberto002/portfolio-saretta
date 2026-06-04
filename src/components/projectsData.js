// Aggiungi "export" davanti alla costante
import copScalo from "../assets/img/scalo/14_luglio_copertina.jpg"
import copAmami from "../assets/img/amami/02.png"
import copScopriamoci from "../assets/img/scopriamoci/copertina.png"
import videoScalo from "../assets/img/scalo/Reel 4 Collazione Salata.mov"
import imgScalo1 from "../assets/img/scalo/11_luglio.png"
import imgScalo2 from "../assets/img/scalo/26_giugno.png"
import imgScalo3 from "../assets/img/scalo/03_ottobre.png"
import imgScalo4 from "../assets/img/scalo/10_ottobre.png"
import imgScalo5 from "../assets/img/scalo/17_novembre (1).png"
import videoAmami from "../assets/img/amami/01_reel_AMAMI.mp4"
import imgAmami1 from "../assets/img/amami/01.png"
import imgAmami2 from "../assets/img/amami/02.png"
import imgAmami3 from "../assets/img/amami/04 (1).png"
import imgAmami4 from "../assets/img/amami/05 (1).png"
import imgAmami5 from "../assets/img/amami/06.png"
import img7p1 from "../assets/img/7p/01.png"
import video7p from "../assets/img/7p/Mani.mov"
import img7p2 from "../assets/img/7p/02 (1).png"
import img7p3 from "../assets/img/7p/03 (1).png"
import img7p4 from "../assets/img/7p/05 (3).png"
import img7p5 from "../assets/img/7p/06 (6).png"
import videoScopriamoci from "../assets/img/scopriamoci/reel.mov"
import scopriamoci1 from "../assets/img/scopriamoci/card/01.png"
import scopriamoci2 from "../assets/img/scopriamoci/card/02.png"
import scopriamoci3 from "../assets/img/scopriamoci/card/03.png"
import scopriamoci4 from "../assets/img/scopriamoci/card/04.png"
import scopriamoci5 from "../assets/img/scopriamoci/card/05.png"

export const projectsData = [
    {
        id: 1,
        name: "scalo24 - digital",
        title: "Sharing is pop",
        subtitle: "Take me back to life",
        description1: "Non solo food, ma condivisione, atmosfera e genuinità. Il progetto nasce con l’idea di trasformare il profilo del locale in uno spazio capace di parlare davvero alla Gen Z, attraverso un linguaggio semplice, diretto e vicino alla community. Un tone of voice spontaneo, leggero e autentico, pensato per far sentire il pubblico parte dell’esperienza ancora prima di entrare nel locale.",
        description2: "Ogni contenuto diventa così un piccolo momento da vivere, condividere e ricordare: qualcosa in cui riconoscersi, fermarsi e interagire in modo naturale. Il risultato è un profilo riconoscibile, fresco e pieno di personalità, dove estetica e strategia convivono senza forzature.",
        description3: " Non una semplice vetrina digitale, ma un racconto continuo capace di trasmettere l’energia del brand e creare una connessione reale con la community.",
        interazioni: "+70.000 INTERAZIONI",
        visualizzazioni: "+1.600.000 VISUALIZZAZIONI",
        time: "in un anno",
        image_cop: copScalo,
        video: videoScalo,
        gallery: [
            imgScalo2,
            imgScalo1,
            imgScalo3,
            imgScalo5,
            imgScalo4,
        ]
    },
    {
        id: 2,
        name: "amami teatro - event",
        title: "in scena e fuori scena",
        subtitle: "Molto più di un semplice festival",
        description1: "Amami Teatro è molto più di un evento: è energia, movimento e spettacolo che prende vita per 8.640 minuti ininterrotti all’interno del Teatro Marrucino di Chieti. L’obiettivo del progetto era raccontare tutta l’intensità del festival attraverso una comunicazione capace di trasmetterne il ritmo, l’atmosfera e le emozioni sul palco e dietro le quinte.", 
        description2: "Teaser, backstage, reel e trend diventano strumenti per avvicinare il pubblico all’esperienza, rendendolo partecipe di tutto ciò che avviene all’interno del Teatro. Il tone of voice è coinvolgente e contemporaneo, pensato per raccontare qualcosa di vicino, vivo e condivisibile anche sui social.",
        description3: "Dove l’arte e il pubblico si fondono in modo naturale. Il risultato è un feed riconoscibile e in continua evoluzione, dove arte e comunicazione si incontrano in modo naturale in un racconto visivo capace di creare attesa, connessione e partecipazione.",
        interazioni: "+157.000 PERSONE RAGGIUNTE",
        time: "in una settimana",
        image_cop: copAmami,
        video: videoAmami,
        gallery: [
            imgAmami1,
            imgAmami4,
            imgAmami2,
            imgAmami5,
            imgAmami3,
        ]
    },
    {
        id: 3,
        name: "sevenplast - digital",
        title: "make it plastic",
        subtitle: "make it unique",
        description1: "Si può trasformare un semplice imballaggio in polietilene in un prodotto unico? La sfida era andare oltre il prodotto stesso e costruire una comunicazione con un’identità forte e riconoscibile. Da oltre 40 anni Sevenplast opera nel settore degli imballaggi in polietilene per il mercato B2B e aveva bisogno di rafforzare la sua presenza online.",
        description2: "Il concept creativo nasce dall’idea di trattare ogni dettaglio con la stessa cura riservata a un prodotto di alta moda. Texture, materiali, luci e composizioni diventano così parte di un racconto visivo più ricercato, dove anche l’imballaggio assume carattere.",
        description3: "La comunicazione punta su precisione, qualità e attenzione ai particolari, trasformando un settore tecnico in qualcosa di visivamente contemporaneo. Il risultato è un feed pulito, distintivo e coerente, capace non solo di valorizzare il prodotto, ma anche di trasmettere una storia fatta di esperienza, aﬃdabilità e scelte consapevoli.",
        interazioni: "+157.000 PERSONE RAGGIUNTE",
        image_cop: img7p5,
        video: video7p,
        gallery: [
            img7p1,
            img7p2,
            img7p3,
            img7p4,
            img7p5,
        ]
    },
    {
        id: 4,
        name: "scopriamoci - editorial",
        title: "scopriamoci",
        subtitle: "Introspezione e sessualità",
        description1: "In questo libro l’obiettivo era quello porre uno sguardo sulle nostre emozioni e di riflettere sulle nostre sensazioni in un viaggio alla scoperta di qualcosa di nuovo. Per farlo ho utilizzato gli scatti di Robert Mapplethorpe e, attraverso il suo studio, ho approfondito aspetti legati alle emozioni, ai legami e alla sessualità.",
        description2: "Il progetto, strutturato come un incontro tra due amanti, si divide in due libri: Scopriamoci, in cui gli scatti del fotografo vengono utilizzati come pretesto per raccontare aspetti della sessualità considerati tabù, e Aftercare, in cui, proprio come in un rapporto, ci si ferma un momento per prendersi cura di sé stessi quando la lettura si fa troppo intensa.",
        description3: "Alla fine del libro si trovano le risposte ad una ricerca qualitativa che nasce da una semplice domanda: questi scatti di nudo, per te, sono arte?",
        image_cop: copScopriamoci,
        video: videoScopriamoci,
        gallery: [
            scopriamoci1,
            scopriamoci2,
            scopriamoci3,
            scopriamoci4,
            scopriamoci5,
        ]
    },
];