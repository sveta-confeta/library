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
        } else {
            setIsMobile(false)
        }
    }
    const handleResizeSmall = () => {
        if (window.innerWidth <= 500) {
            setIsMobileSmall(true)
        } else {
            setIsMobileSmall(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", handleResizeSmall)

    },[])

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

    const images:BooksType = books.find(el => props.id === el.id)!;

    const arrImgs:string[]=images.image!;




    return (
        <React.Fragment>
            <Swiper
                loop={true}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                spaceBetween={10}
                pagination= {{ clickable: isMobile }}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,}}
                modules={[FreeMode, Navigation, Thumbs]}
                 watchSlidesProgress={true}
                grabCursor={true}
                className={ `${s.swiperStyle} ${isMobile ?  s.placePagination : ''} ${isMobileSmall ?  s.placePaginationSmall : ''}`}>
                {
                    (arrImgs.length)!==0 ?
                    arrImgs.map((m) => (
                        <SwiperSlide >
                            <img src={m} alt='обложка выбранной книги'/>
                        </SwiperSlide>
                    )) :
                        <SwiperSlide >
                            <img src={defaultImg} alt='обложка выбранной книги'/>
                        </SwiperSlide>
                }
            </Swiper>
            { isMobile ? '' :   <Swiper
                loop={true}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={s.swiperStyleThumbs}>

                {
                    (arrImgs.length >1)
                        ?
                        arrImgs.map((m) => (
                            <SwiperSlide >
                                {({ isActive }) => (
                                    <div className= {isActive ? s.active : s.imgWrapper}>
                                        <img src={m} alt='обложка выбранной книги'/>
                                    </div>

                                )}

                            </SwiperSlide>
                        )) :
                        ''
                }
            </Swiper>
            }

        </React.Fragment>
    )
};



