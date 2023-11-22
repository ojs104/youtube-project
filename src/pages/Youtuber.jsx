import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Youtuber = () => {
    return (
        <Main
            title='유명 유튜버 모음'
            description='영화 유튜버 모음 입니다. 영화 유튜버들을 모두 확인할 수 있습니다.'
        >

            <section id='youtuberPage'>
                <h2>🤭 유명 유튜버 모음</h2>
                <div className='youtuber__inner '>
                    {youtuberText.map((youtuber, key) => (
                        <div className='youtuber play__icon' key={key}>
                            <div className='youtuber__img'>
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.img} />
                                </Link>
                            </div>
                            <div className='youtuber__info'>{youtuber.author}</div>
                        </div>

                    ))}
                </div>
            </section >

        </Main>
    )
}

export default Youtuber