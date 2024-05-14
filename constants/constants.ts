import { SiLinkedin, SiX, SiGithub, SiFlutter, SiExpress, SiLaravel, SiUnity, SiNodedotjs, SiNextdotjs, SiMysql, SiTailwindcss, SiMongodb, SiNginx, SiPrisma } from "react-icons/si";

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
        title: "Todo App",
        tech: [SiNextdotjs, SiMongodb, SiPrisma, SiNginx],
        link: 'https://todoapp.andhikawidiarto.my.id/',
        cover: '/image/todoapp.png',
        background: 'bg-green-500',
    }, {
        title: "Evently",
        tech: [SiNextdotjs, SiMongodb, SiNginx],
        link: 'https://evently.andhikawidiarto.my.id/',
        cover: '/image/evently.png',
        background: 'bg-indigo-500',
    }, {
        title: "AR Pengenalan Candi",
        tech: [SiFlutter, SiUnity,],
        link: 'https://play.google.com/store/apps/details?id=com.andhikahouse.pengenalancandi',
        cover: '/image/arpengenalancandi.png',
        background: 'bg-indigo-500',
    },    {
        title: "Titip ITCI",
        tech: [SiFlutter, SiNodedotjs, SiExpress],
        link: 'https://github.com/AdkPrtm/titip-itci',
        cover: '/image/notfound.jpg',
        background: 'bg-green-500',
    }, {
        title: "Ewallet APP Clone Mobile and Backend",
        tech: [SiFlutter, SiLaravel],
        link: 'https://github.com/AdkPrtm/ewallet-app',
        cover: '/image/notfound.jpg',
        background: 'bg-indigo-500',
    }
]


export const skillsData = [
    {
        title: "Flutter",
        icon: SiFlutter,
    },
    {
        title: "NextJs",
        icon: SiNextdotjs,
    }, {
        title: "ExpressJs",
        icon: SiExpress,
    }, {
        title: "Laravel",
        icon: SiLaravel,
    }, {
        title: "MySql",
        icon: SiMysql,
    }, {
        title: "Tailwind",
        icon: SiTailwindcss,
    },
]