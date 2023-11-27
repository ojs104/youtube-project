import React, { useEffect, useState } from 'react'

import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'

import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider'

import { fetchFromAPI } from '../utils/api'


const Home = () => {
    const [channelVideo1, setChannelVideo1] = useState([]);
    const [channelVideo2, setChannelVideo2] = useState([]);
    const [channelVideo3, setChannelVideo3] = useState([]);
    const [channelVideo4, setChannelVideo4] = useState([]);
    const [channelVideo5, setChannelVideo5] = useState([]);

    useEffect(() => {
        const v1 = "UCag-UCdTDdygpZKdDew2s1s419iw";
        const v2 = "UChI3EXzhAkRszawlMageKvQ";
        const v3 = "UCPoTjCZvUOkECBNm6ezsVEA";
        const v4 = "UCT8DsZlac7D1_dx6d8Kh_Qw";
        const v5 = "UCbFzvzDu17eDZ3RIeaLRswQ";

        const fetchResults = async () => {
            try {
                const videosData1 = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo1(videosData1.items);

                const videosData2 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo2(videosData2.items);

                const videosData3 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo3(videosData3.items);

                const videosData4 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo4(videosData4.items);

                const videosData5 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo5(videosData5.items);

            } catch (error) {
                console.log("Error fetching data -> ", error);
            }
        }
        fetchResults();
    }, []) // 빈문자열 중요! 트래픽 초과

    return (
        <Main
            title='영화 유튜버'
            description='영화 유튜버 모음 사이트에 오신것을 환영합니다.'
        >
            <Today />
            <Youtuber />


            <VideoSlider videos={channelVideo1} title="😆 슛포러브 최신영상" name='v1' />
            <VideoSlider videos={channelVideo2} title="😆 리춘수 최신영상" name='v2' />
            <VideoSlider videos={channelVideo3} title="😆 이대호 최신영상" name='v3' />
            <VideoSlider videos={channelVideo4} title="😆 JK 아트사커 온라인 최신영상" name='v4' />
            <VideoSlider videos={channelVideo5} title="😆 감스트 최신영상" name='v5' />


        </Main >
    )
}

export default Home