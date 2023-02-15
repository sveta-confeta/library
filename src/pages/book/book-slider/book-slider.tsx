import React, {useEffect, useState} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SwiperCore, {FreeMode, Navigation, Pagination, Thumbs} from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Swiper, SwiperSlide} from 'swiper/react';

import s from './book-slider.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import {imageBook} from "../../../api/library-api";

SwiperCore.use([Navigation, Pagination,]);

type BookSliderType = {
    arrImgs?:imageBook[]
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
        window.addEventListener('resize', handleResize)
        window.addEventListener('resize', handleResizeSmall)

    }, [])

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(1);


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
                spaceBetween={30}
                pagination={{clickable: isMobile}}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,}}
                modules={[FreeMode,Navigation, Thumbs]}
                watchSlidesProgress={true}
                grabCursor={true}
                className={`${s.swiperStyle}`}>




                {props.arrImgs?.map((m) => (
                    <SwiperSlide className={s.sliderImg}>
                        <img src={`https://strapi.cleverland.by${m.url}`} alt='обложка выбранной книги'/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                loop={true}
                onSwiper={setThumbsSwiper}
                spaceBetween={30}
                slidesPerView={props.arrImgs?.length}
                watchSlidesProgress={true}
                scrollbar={{draggable: true}}
                slideVisibleClass={s.slideVisible}
                centeredSlides={true}
                grabCursor={true}
                modules={[ Navigation, Thumbs]}
                className={s.swiperStyleThumbs}>
                {props.arrImgs?.map((m, ind) => (
                    <SwiperSlide onClick={() => slideTo(ind)}>
                        <div className={ind === swiperActiveIndex ? s.sliderActive : s.imgWrapper}>
                            <img src={`https://strapi.cleverland.by${m.url}`} alt='обложка выбранной книги'/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </React.Fragment>
    )
};



