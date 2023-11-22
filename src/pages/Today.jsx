import React from 'react'
import { todayText } from '../data/today'
import Main from '../components/section/Main'

const Today = () => {
    return (
        <Main
            title='오늘의 추천 픽!'
            description='영화 유튜버 채널 페이지 입니다. 영화 유튜버의 영상을 모두 확인할 수 있습니다.'
        >
            <section id='todayPage'>
                <h2>🤩 오늘의 추천 픽!!!</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb">
                            <img src={today.img} alt={today.title} />
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 픽!</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>{today.author}</span>
                                <span className='data'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

        </Main>
    )
}

export default Today