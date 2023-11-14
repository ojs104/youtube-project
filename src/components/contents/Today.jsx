import React from 'react'
import { todayText } from '../../data/today'

const Today = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb"></div>
                <div className="today__text">
                    <span className='today'>오늘의 픽</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}

                    </p>
                    <div className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='data'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today