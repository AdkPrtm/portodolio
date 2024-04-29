import { SiLinkedin, SiX, SiGithub, SiFlutter, SiExpress, SiLaravel, SiMikrotik, SiOdoo, SiReact, SiUnity, SiNodedotjs } from "react-icons/si";

export const socials = [
    {
        link: "https://www.linkedin.com/in/andhikawidiarto/",
        label: "LinkedIn",
        icon: SiLinkedin
    },
    {
        link: "",
        label: "X",
        icon: SiX
    },
    {
        link: "https://github.com/AdkPrtm",
        label: "Github",
        icon: SiGithub
    },
]

export const projects = [
    {
        title: "AR Pengenalan Candi",
        tech: [SiFlutter, SiUnity,],
        link: 'https://play.google.com/store/apps/details?id=com.andhikahouse.pengenalancandi',
        cover: '/image/arpengenalancandi.png',
        background: 'bg-indigo-500',
    },
    {
        title: "Titip ITCI",
        tech: [SiFlutter, SiNodedotjs, SiExpress],
        link: 'https://github.com/AdkPrtm/titip-itci',
        cover: '/image/notfound.jpg',
        background: 'bg-indigo-500',
    }, {
        title: "Ewallet APP Clone Mobile and Backend",
        tech: [SiFlutter, SiLaravel],
        link: 'https://github.com/AdkPrtm/ewallet-app',
        cover: '/image/notfound.jpg',
        background: 'bg-indigo-500',
    }, {
        title: "XXX",
        tech: [SiFlutter,],
        link: 'https://andhika.my.id',
        cover: '/image/notfound.jpg',
        background: 'bg-indigo-500',
    },
]


export const skillsData = [
    {
        title: "Flutter",
        icon: SiFlutter,
    },
    {
        title: "React",
        icon: SiReact,
    }, {
        title: "ExpressJs",
        icon: SiExpress,
    }, {
        title: "Laravel",
        icon: SiLaravel,
    }, {
        title: "Mikrotik",
        icon: SiMikrotik,
    }, {
        title: "Odoo",
        icon: SiOdoo,
    },
]