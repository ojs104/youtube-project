import React from 'react'
import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';



const youtuber = () => {
    return (
        <section id='youtuber'>
            <h2>🤭 영화리뷰 유튜버 모음</h2>
            <div className='youtuber__inner'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },

                        600: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {youtuberText.map((youtuber, key) => (
                        <SwiperSlide className='youtuber play__icon' key={key}>
                            <div className='youtuber__img'>
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.img} />
                                </Link>
                            </div>
                            <div className='youtuber__info'>{youtuber.author}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default youtuber