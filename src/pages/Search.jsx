import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaClapperboard } from "react-icons/fa6";

import VideoSearch from '../components/video/VideoSearch';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);

    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        setLoading(true); // 데이터 로딩 시작 시 loading 상태를 true로 설정
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {

        fetchFromAPI(`search?type=video&part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                console.log(data)
            })
            .catch((error) => {
                console.log("error fetching data", error)
            })
.finally(() => {
                setLoading(false); // 비동기 작업이 완료된 후에 호출
            });
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
setLoading(true);
            fetchVideos(searchId, nextPageToken);
        }
    }
const searchPageClass = loading ? 'isLoading' : 'isLoaded'

    return (

        <Main
            title="다큐멘터리 검색"
            description="원하는 유튜브 영상을 검색해 주세요">
            <section id="searchPage">
                <h2><FaClapperboard /> {searchId} 검색결과입니다.</h2>

                <div className={`video__inner ${searchPageClass}`}>
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    <button onClick={handleLoadMore}>더 보기 ↓</button>
                </div>
            </section>
        </Main>

    )
}

export default Search