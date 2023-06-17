import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa';

const HomeSlider = () => {
    return (
        <div className='slider-container'>
            <Swiper
                modules={[EffectFade]}
                className="slider-img"
                speed={2400}
                loop={true}
                effect={"fade"}
            >
                <SwiperSlide
                    className="swiper-slide slider-img__slide"
                    style={{ backgroundImage: "url(/images/car-1.jpg)" }}
                >
                </SwiperSlide>
                <SwiperSlide
                    className="swiper-slide slider-img__slide"
                    style={{ backgroundImage: "url(/images/car-4.jpg)" }}
                >
                </SwiperSlide>
            </Swiper>

            <div className="slider-bottom">
                <div className="slider-share">
                    <div className="slider-share__items">
                        <div className="home-aside__social-item  slider-share__item">
                            <a href="/" className="home-aside__social-link">
                                <AiOutlineInstagram />
                            </a>
                        </div>
                        <div className="home-aside__social-item  slider-share__item">
                            <a href="/" className="home-aside__social-link ">
                                <AiOutlineYoutube />
                            </a>
                        </div>
                        <div className="home-aside__social-item  slider-share__item">
                            <a href="/" className="home-aside__social-link ">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="slider-pagination">222</div>
                <div className="slider-scrollbar">333</div>
                <div className="slider-navigation">444</div>
            </div>
        </div>
    );
};

export default HomeSlider;
