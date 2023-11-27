import React from 'react'
import { todayText } from '../data/today'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main
            title="오늘의 추천 영상"
            description="오늘의 추천 유튜브 영상입니다."
        >
            <section id='todayPage'>
                <h2>🤩 오늘의 추천 픽!!!</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb play__icon">
                            <Link
                                to={`/video/${today.videoId}`}
                                style={{ backgroundImage: `url(${today.img})` }}
                            >
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 영상</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>{today.desc}</p>
                            <div className="info">
                                <Link
                                    to={`/channel/${todayText[0].channelId}`}
                                >
                                <span className='author'>{todayText[0].author}</span>
                                    </Link>
                                                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
</section >
        </Main>
    )
}

export default Today