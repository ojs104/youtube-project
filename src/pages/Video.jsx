import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { AiFillEye } from 'react-icons/ai';
import { AiFillLike } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import Main from '../components/section/Main';



const Video = () => {
    const [loading, setLoading] = useState(true)

    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    // const [comments, setComments] = useState([]);

    useEffect(() => {
        setLoading(true); // 데이터 로딩 시작 시 loading 상태를 true로 설정
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                setLoading(false); // 데이터 로딩 완료 시 loading 상태를 false로 변경
                console.log(data)
            });

        // fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
        //     .then((data) => {
        //         setComments(data.items);
        //         console.log(data)
        //     })
    }, [videoId])

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';



    return (
        <Main
            title='유명 유튜버 모음'
            description='영화 유튜버 영상 페이지 입니다. 영화 유튜버의 영상을 모두 확인할 수 있습니다.'
        >
            <section id='videoPage' className={channelPageClass}>
                <h2>비디오</h2>
                {videoDetail && (
                    <div className='video__view'>
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100%"
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className="video__title">{videoDetail.snippet.title}</h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <span className='view'><AiFillEye />{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><AiFillLike />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><AiFillMessage />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </Main>
    )
}

export default Video