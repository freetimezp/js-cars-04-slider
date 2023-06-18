import React, { useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Controller } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa';

const HomeSlider = () => {
    const sliderImgRef = useRef(null);
    const sliderTextRef = useRef(null);

    useEffect(() => {
        const sliderImg = sliderImgRef.current.swiper;
        const sliderText = sliderTextRef.current.swiper;

        //console.log(sliderImg);
        console.log(sliderText);

        if (sliderImg.controller && sliderText.controller) {
            console.log('ok');
            sliderImg.controller.control = sliderText;
            sliderText.controller.control = sliderImg;
        } else {
            console.log('none');
        }
    }, []);

    return (
        <div className='slider-container'>
            <Swiper
                ref={sliderTextRef}
                modules={[EffectFade, Mousewheel, Controller]}
                className="slider-text"
                speed={2400}
                mousewheel={true}
                loop={false}
            >
                <SwiperSlide className='slider-text__slide'>
                    <div className="slider-text__content">
                        <h2 className="slider-text__heading">
                            Select a transport <br /> <span>for all</span> live needs
                        </h2>
                        <p className="slider-text__desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolore ipsam vitae ea distinctio nostrum illum quia dolor
                            pariatur sapiente similique.
                        </p>
                        <button className="button slider-text__button">
                            <span>Contact Us</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider-text__slide'>
                    <div className="slider-text__content">
                        <h2 className="slider-text__heading">
                            Individual approach <br /> <span>to every</span> customer
                        </h2>
                        <p className="slider-text__desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolore ipsam vitae ea distinctio nostrum illum quia dolor
                            pariatur sapiente similique.
                        </p>
                        <button className="button slider-text__button">
                            <span>Contact Us</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider-text__slide'>
                    <div className="slider-text__content">
                        <h2 className="slider-text__heading">
                            Choice the best model <br /> <span>according</span> to your request
                        </h2>
                        <p className="slider-text__desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolore ipsam vitae ea distinctio nostrum illum quia dolor
                            pariatur sapiente similique.
                        </p>
                        <button className="button slider-text__button">
                            <span>Contact Us</span>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                ref={sliderImgRef}
                modules={[EffectFade, Mousewheel, Controller]}
                className="slider-img"
                speed={2400}
                mousewheel={true}
                loop={false}
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
                <SwiperSlide
                    className="swiper-slide slider-img__slide"
                    style={{ backgroundImage: "url(/images/car-5.jpg)" }}
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
        </div >
    );
};

export default HomeSlider;
