import { FcMusic } from "react-icons/fc";

import { FcLike } from "react-icons/fc";
import { FcStart } from "react-icons/fc";



import { FaGithub } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export const menuText = [
    {
        title: "music playlist",
        icon: <FcMusic />,
        src: "/"
    },
    {
        title: "오늘의 추천 픽!!",
        icon: <FcLike />,
        src: "/today"
    },
    {
        title: "유명 유튜버 모음",
        icon: <FcStart />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "슛포러브",
        src: "/search/슛포러브"
    },
    {
        title: "제이풋볼",
        src: "/search/제이풋볼"
    },
    {
        title: "리춘수",
        src: "/search/리춘수"
    },
    {
        title: "이스타TV",
        src: "/search/이스타TV"
    },
    {
        title: "김진짜",
        src: "/search/김진짜"
    },
    {
        title: "고알레",
        src: "/search/고알레"
    },
    {
        title: "달수네",
        src: "/search/달수네"
    },
    {
        title: "석꾸",
        src: "/search/석꾸"
    },
    {
        title: "이거해줘 원희형",
        src: "/search/이거해줘 원희형"
    },
    {
        title: "꽁병지TV",
        src: "/search/꽁병지TV"
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