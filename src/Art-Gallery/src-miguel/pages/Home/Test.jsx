import React from 'react';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Donkey1 from "../../images/Donkey1.webp";
import Donkey2 from "../../images/Donkey2.webp";
import Donkey3 from "../../images/Donkey3.webp";
import Donkey4 from "../../images/Donkey4.webp";
import Donkey5 from "../../images/Donkey5.webp";
import Donkey6 from "../../images/Donkey6.webp";
import Donkey7 from "../../images/Donkey7.webp";
import Donkey8 from "../../images/Donkey8.webp";
import Donkey9 from "../../images/Donkey9.webp";
import Donkey10 from "../../images/Donkey10.webp";
import "../Miguel.css"
const Slider = () => {
    const images = [
        { src: Donkey1, caption: "[DO#001] Baja Donkey", price:"From $95" },

        { src: Donkey2, caption: "[DO#002] Blue Donkey Door ", price:"From $95" },
        { src: Donkey3, caption: "[DO#003] Red Donkey Door", price:" From $95" },
        { src: Donkey4, caption: "[DO#004] Down Pour Donkey Door ", price:"From $95" },
        { src: Donkey5, caption: "[DO#005] Turquoise Donkey Door ", price:" From $95" },
        { src: Donkey6, caption: "[DO#006] Three Donkeys ", price:"From $95" },
        { src: Donkey7, caption: "[DO#007] Tres Donkeys ", price:"From $95" },
        { src: Donkey8, caption: "[DO#008] Three Curios Donkeys", price:" From $95" },
        { src: Donkey9, caption: "[DO#009] Colorful Crazy 5 Donkeys", price:" From $285" },
        { src: Donkey10, caption: "[DO#010] Sepia Crazy 5 Donkeys ", price:"From $285" },
    ];

    return (
        <section className='w-full relative  pt-[20px]'>
            <Swiper
                modules={[Navigation, A11y]}
                // spaceBetween={28}
                slidesPerView={2}
                breakpoints={{
                    0: {slidesPerView: 1},
                    992: {slidesPerView : 2}
                }}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className='w-full md:w-1/2 flex lg:justify-end justify-center'>
                        <div className="w-full md:w-[80%] ">
                            {/* <a href="#" className="product-card__link" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2 }}></a> */}
                            <img
                                src={img.src}
                                alt={`slide-${index + 1}`}
                                // style={{ height: '508.5px', width: '381.39px', objectFit: 'cover' }}
                                className='w-full h-[508px]'
                            />
                            <p className='text-[#F6C934] pt-[14px] list text-[22px]'>{img.caption}</p>
                            <p className='text-[#F6C934] pt-[8px] list text-[22px]'>{img.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </section>
    );
};

export default Slider;