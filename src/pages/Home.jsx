import React, { useEffect, useState } from 'react'
import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'

import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCpcft4FJXgUjnxWoQYsl7Ug";

        const v2 = "UCM5Ij_HwT8V6xPT9cRBFjJw";
        const v3 = "UCuK80YHBZyyKrr2B1oHrgrw";
        const v4 = "UCMguxwveCsLVpyKrLz-EFTg";
        const v5 = "UCrBpV_pG2kyMMEHCMTNzjAQ";

        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);
                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log("Error fetching -> ", error);
            }
        }
        fetchResults();
    }, []) // 빈문자열 중요! 트래픽 초과

    return (
        <Main
            title='영화 유튜버'
            description='영화 유튜버 모음 사이트에 오신것을 환용합니다.'
        >
            <Today />
            <Youtuber />


            <VideoSlider videos={channelVideo} title="😎 고몽 최신영상" name='v1' />
            <VideoSlider videos={channelVideo2} title="😎 사우스파크 최신영상" name='v2' />
            <VideoSlider videos={channelVideo3} title="😎 어퍼컷Tube 최신영상" name='v3' />
            <VideoSlider videos={channelVideo5} title="😎 리뷰엉이 최신영상" name='v5' />
            <VideoSlider videos={channelVideo4} title="😎 달빛뮤즈 최신영상" name='v4' />


        </Main>
    )
}

export default Home