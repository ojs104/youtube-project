import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import { AiFillEye } from 'react-icons/ai';
import { AiFillStar } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";


import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';


const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);

    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                // console.log(data)
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                // console.log(videoData);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Error -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();

    }, [channelId])

    //더보기 기능
    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);//... spread 배열
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';


    return (
        <Main
            title='영화 유튜버 채널'
            description='영화 유튜버 채널 페이지 입니다. 영화 유튜버의 영상을 모두 확인할 수 있습니다.'
        >

            <section id='channelPage' className={channelPageClass}>
                {channelDetail && (

                    <div className="channel__inner">
                        <div className="channel__header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><AiFillStar />{channelDetail.statistics.videoCount}</span>
                                <span><AiFillEye />{channelDetail.statistics.viewCount}</span>
                                <span><FaRegBell />{channelDetail.statistics.subscriberCount}</span>
                            </div>
                        </div>

                        <div className="channel__video video__inner search">
                            <VideoSearch videos={channelVideo} layout="channel" />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}

            </section>

        </Main>
    )
}

export default Channel