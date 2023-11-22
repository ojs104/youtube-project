import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);

    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true); // 데이터 로딩 시작 시 loading 상태를 true로 설정
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {

        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setLoading(false); // 데이터 로딩 완료 시 loading 상태를 false로 변경
                console.log(data)
            })
            .catch((error) => {
                console.log("Error fetching data", error);
                setLoading(false);
            })

    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title='영화 유튜버'
            description='영화 유튜버 모음 사이트에 오신것을 환용합니다.'
        >

            <section id='searchPage' >
                <h2>😀 <em>{searchId}</em> 검색 결과입니다.</h2>
                <div className={`video__inner ${channelPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>

                <div className='video__more'>
                    <button onClick={handleLoadMore}>더보기</button>
                </div>
            </section>
        </Main>
    )

}

export default Search