import { RiMovie2Fill } from "react-icons/ri";
import { MdMovieFilter } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";




import { FaGithub } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export const menuText = [
    {
        title: "movie review",
        icon: <RiMovie2Fill />,
        src: "/"
    },
    {
        title: "오늘의 추천 픽!!",
        icon: <MdMovieFilter />,
        src: "/today"
    },
    {
        title: "유명 유튜버 모음",
        icon: <RiMovieFill />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "고몽",
        src: "/search/고몽"
    },
    {
        title: "사우스 코리안 파크",
        src: "/search/사우스 코리안 파크"
    },
    {
        title: "지무비",
        src: "/search/지무비"
    },
    {
        title: "어퍼컷Tube",
        src: "/search/어퍼컷Tube"
    },
    {
        title: "김진짜",
        src: "/search/김진짜"
    },
    {
        title: "김시선",
        src: "/search/김시선"
    },
    {
        title: "드림텔러(DreamTeller)",
        src: "/search/드림텔러(DreamTeller)"
    },
    {
        title: "어바웃타임",
        src: "/search/어바웃타임"
    },
    {
        title: "B Man 삐맨",
        src: "/search/B Man 삐맨"
    },
    {
        title: "달빛뮤즈",
        src: "/search/달빛뮤즈"
    },
]

export const snsText = [
    {
        title: "Github",
        src: "https://ojs104.github.io/",
        icon: <FaGithub />
    },
    {
        title: "Youtube",
        src: "https://www.youtube.com/",
        icon: <FaSquareYoutube />
    },
    {
        title: "Instargram",
        src: "https://www.instagram.com/webstoryboy",
        icon: <FaInstagram />
    },
    {
        title: "Twitter",
        src: "https://ojs104.github.io/",
        icon: <FaSquareXTwitter />
    },
]