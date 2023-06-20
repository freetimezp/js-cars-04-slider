import React, { useRef, useEffect } from 'react';

import { gsap, Power2 } from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Controller, Pagination, A11y, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
        //console.log(sliderText);

        if (sliderImg.controller && sliderText.controller) {
            //console.log('ok');
            sliderImg.controller.control = sliderText;
            sliderText.controller.control = sliderImg;
        } else {
            //console.log('none');
        }
    }, []);

    return (
        <div className='slider-container'>
            <Swiper
                onSlideNextTransitionStart={() => {
                    gsap.to(document.querySelector('.slider-gear'), 2.8, {
                        rotation: '+=35',
                        ease: Power2.easeOut
                    })
                }}
                onSlidePrevTransitionStart={() => {
                    gsap.to(document.querySelector('.slider-gear'), 2.8, {
                        rotation: '-=35',
                        ease: Power2.easeOut
                    })
                }}
                onSlideChange={(slider) => {
                    let curnum = document.querySelector('.slider-pagination-count .current');
                    let pageCur = document.querySelector('.slider-pagination-current .number');

                    let ind = slider.realIndex + 1;
                    //console.log(ind);

                    gsap.to(curnum, 0.2, {
                        force3D: true,
                        y: -10,
                        opacity: 0,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            gsap.to(curnum, 0.2, {
                                force3D: true,
                                y: 20,
                            })

                            curnum.innerHTML = `0${ind}`;
                            pageCur.innerHTML = `0${ind}`;
                        }
                    })
                    gsap.to(curnum, 0.5, {
                        force3D: true,
                        y: 0,
                        opacity: 1,
                        delay: 0.3,
                        ease: Power2.easeOut,
                    })

                }}
                ref={sliderTextRef}
                modules={[EffectFade, Mousewheel, Controller, Pagination, A11y, Scrollbar, Navigation]}
                className="slider-text"
                speed={2400}
                mousewheel={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                scrollbar={{
                    el: ".swiper-scrollbar",
                    hide: true,
                    draggable: true,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                    dynamicBullets: true,
                }}
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
                modules={[EffectFade, Mousewheel, Controller, Pagination]}
                className="slider-img"
                speed={2400}
                pagination={{
                    el: ".slider-pagination-count .total",
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        return `0${total}`
                    }
                }}
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
                <div className="slider-pagination">
                    <div className="swiper-pagination"></div>
                </div>
                <div className="slider-scrollbar">
                    <div className="swiper-scrollbar"></div>
                </div>
                <div className="slider-navigation">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>

            <div className="slider-pagination-count">
                <span className="current">01</span> / <span className="total slider-pagination-custom"></span>
            </div>

            <div className="slider-pagination-current">
                <span className="number">01</span><span className="dot">.</span>
            </div>

            <div className="slider-gear"></div>
        </div >
    );
};

export default HomeSlider;
