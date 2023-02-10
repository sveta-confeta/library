import React, {useEffect, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SwiperCore, {FreeMode, Navigation, Pagination, Thumbs} from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Swiper, SwiperSlide} from 'swiper/react';

import defaultImg from '../../../assets/default-image .jpg';
import {books, BooksType} from '../../../assets/mocks';

import s from './book-slider.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

SwiperCore.use([Navigation, Pagination,]);

type BookSliderType = {
    id?: string
}

export default function BookSlider(props: BookSliderType) {
    const [isMobile, setIsMobile] = useState(false)
    const [isMobileSmall, setIsMobileSmall] = useState(false)

    const handleResize = () => {
        if (window.innerWidth <= 940) {
            setIsMobile(true)
        }
    }
    const handleResizeSmall = () => {
        if (window.innerWidth <= 500) {
            setIsMobileSmall(true)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", handleResizeSmall)

    },[])

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);

    const images:BooksType = books.find(el => props.id === el.id)!;

    const arrImgs:string[]=images.image!;

    const slideTo = (index: number) => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(index);
            thumbsSwiper.activeIndex = index;
        }
        setSwiperActiveIndex(index);
    };

    return (
        <React.Fragment>
            <Swiper
                data-test-id='slide-big'
                loop={true}
                spaceBetween={10}
                pagination= {{ clickable: isMobile }}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,}}
                modules={[ Navigation, Thumbs]}
                 watchSlidesProgress={true}
                grabCursor={true}
                className={ `${s.swiperStyle} ${isMobile ?  s.placePagination : ''} ${isMobileSmall ?  s.placePaginationSmall : ''}`}>
                {
                    (arrImgs.length)!==0 ?
                    arrImgs.map((m) => (
                        <SwiperSlide >
                            < img   data-test-id='slide-big' src={m} alt='обложка выбранной книги'/>
                        </SwiperSlide>
                    )) :
                        <SwiperSlide >
                            <img src={defaultImg} alt='обложка выбранной книги'/>
                        </SwiperSlide>
                }
            </Swiper>
            {
                isMobile ? "" :
                     (arrImgs.length >1)  ?  <Swiper
                        loop={true}
                        loopedSlides={10}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        scrollbar={{draggable:true}}
                        centeredSlides={true}
                        watchOverflow={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        slideVisibleClass={s.slideVisible}
                        className={s.swiperStyleThumbs}>




                        {arrImgs.map((m,ind) => (
                            <SwiperSlide onClick={() => slideTo(ind)}>
                                <div className= {ind === swiperActiveIndex ? s.sliderActive : s.imgWrapper}>
                                    <img data-test-id='slide-mini' src={m} alt='обложка выбранной книги'/>
                                </div>



                            </SwiperSlide>
                        ))}
                    </Swiper>: ''
            }



        </React.Fragment>
    )
};




