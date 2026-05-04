// Aggiungi "export" davanti alla costante
import copScalo from "../assets/img/scalo/14_luglio_copertina.jpg"
import copAmami from "../assets/img/amami/02.png"
import videoScalo from "../assets/img/scalo/Reel 4 Collazione Salata.mov"
import imgScalo1 from "../assets/img/scalo/11_luglio.png"
import imgScalo2 from "../assets/img/scalo/26_giugno.png"
import imgScalo3 from "../assets/img/scalo/03_ottobre.png"
import imgScalo4 from "../assets/img/scalo/10_ottobre.png"
import videoAmami from "../assets/img/amami/01_reel_AMAMI.mp4"
import imgAmami1 from "../assets/img/amami/01.png"
import imgAmami2 from "../assets/img/amami/02.png"
import imgAmami3 from "../assets/img/amami/04 (1).png"
import imgAmami4 from "../assets/img/amami/05 (1).png"
import imgAmami5 from "../assets/img/amami/06.png"

export const projectsData = [
    {
        id: 1,
        name: "scalo24 - digital",
        title: "Sharing is pop",
        subtitle: "Take me back to life",
        description: "Non solo food ma condivisione e tanta genuinità. Parliamo alla Gen Z con un linguaggio vicino alla community tatto di ricordi, momenti e trasi iconiche. Ogni contenuto è studiato per fermare lo scroll e invogliare a interagire, trasformando ogni post in un piccolo momento da vivere e condividere. sato eun orono aconosciole vvare e invitante: non solo una vetrina digitale, ma un'esperienza che trasmette la personalità del locale e crea connessione con il bubblico.",
        interazioni: "+70.000 INTERAZIONI",
        visualizzazioni: "+1.600.000 VISUALIZZAZIONI",
        time: "in un anno",
        image_cop: copScalo,
        video: videoScalo,
        gallery: [
            imgScalo1,
            imgScalo2,
            imgScalo3,
            imgScalo4,
        ]
    },
    {
        id: 2,
        name: "amami teatro - event",
        title: "in scena e fuori scena",
        subtitle: "Molto più di un semplice festival",
        description: "Amami Teatro è un evento che da anni anima il Teatro Marrucino di Chieti per 8.640 minuti ininterrotti di spettacolo dal vivo. L'obiettivo era quello di catturare l'energia, il ritmo e l'atmosfera del festival: teaser, storie dal backstage, reel e trend del momento che trasformano ogni post in un'anteprima da vivere.Il risultato è un feed dinamico e riconoscibile, capace di connettere il publico con l'arte dal vivo, far parte dell'esperienza.",
        interazioni: "+157.000 PERSONE RAGGIUNTE",
        time: "in una settimana",
        image_cop: copAmami,
        video: videoAmami,
        gallery: [
            imgAmami1,
            imgAmami2,
            imgAmami3,
            imgAmami4,
            imgAmami5,
        ]
    },
    {
        id: 3,
        name: "il cerreto - digital",
        image_cop: "/src/assets/img/home/06.png",
    },
    {
        id: 4,
        name: "sevenplast - digital",
        image_cop: "/src/assets/img/scalo/14_luglio_copertina.jpg",
    },
    {
        id: 5,
        name: "voxel - digital",
        image_cop: "/src/assets/img/amami/02.png",
    },
    {
        id: 6,
        name: "scopriamoci - book",
        image_cop: "/src/assets/img/home/06.png",
    },
];