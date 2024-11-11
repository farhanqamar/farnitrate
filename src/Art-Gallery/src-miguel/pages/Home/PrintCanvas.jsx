import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from 'react-router-dom'
import im1 from "../../images/array2/i1.webp";
import im2 from "../../images/array2/i2.webp";
import im3 from "../../images/array2/i3.webp";
import im4 from "../../images/array2/i4.webp";
import im5 from "../../images/array2/i5.webp";
import im6 from "../../images/array2/i6.webp";
import im7 from "../../images/array2/i7.webp";
import im8 from "../../images/array2/i8.webp";
import im9 from "../../images/array2/i9.webp";
import im10 from "../../images/array2/i10.webp";
import im11 from "../../images/array2/i11.webp";
import im12 from "../../images/array2/i12.webp";
import im13 from "../../images/array2/i13.webp";
import im14 from "../../images/array2/i14.webp";
import im15 from "../../images/array2/i15.webp";
import im16 from "../../images/array2/i16.webp";
import im17 from "../../images/array2/i17.webp";
import im18 from "../../images/array2/i18.webp";
import im19 from "../../images/array2/i19.webp";
import im20 from "../../images/array2/i20.webp";
import im21 from "../../images/array2/i21.webp";
import im22 from "../../images/array2/i22.webp";
import im23 from "../../images/array2/i23.webp";


const LatestCollection = () => {
  
  const array2 = [im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14,im15,im16,im17,im18,im19,im20,im21,im22,im23];
  const PrintOnCanvas = () => {
    const [paddingRemoved, setPaddingRemoved] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
      setPaddingRemoved(swiper.activeIndex !== 0);
    };
    return (
      <section className='flex justify-end'>
        <div className="relative w-[100%] ">
        <div className="flex justify-around">
          <h2 className="leading-10 py-12 text-3xl font-bold text-[#F6C936]">Our Latest Collection</h2>
          <div className="flex justify-between items-center">
            <div className="top-0 z-10">
              <button className="swiper-button-prev-custom mx-4 border border-dashed border-[#F6C936] p-3">
                <FiChevronLeft className="text-xl text-[#F6C936]" /> {/* Left icon */}
              </button>
            </div>
            <div className="top-0 right-2 z-10">
              <button className="swiper-button-next-custom mx-2 border border-dashed border-[#F6C936] p-3">
                <FiChevronRight className="text-xl text-[#F6C936]" /> {/* Right icon */}
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
        //   spaceBetween={0} 
          loop={false}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }, 
          }}
          className={`${paddingRemoved ? "pr-0" : "pl-[40px] pr-[168px] mr-[231.5px]"}`}
        >

          <div className='flex gap-2'>
          {array2.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='w-fit'>
              {image && (
              <img
                src={image}
                alt={index === 0 ? "" : `Slide ${index + 1}`} // Conditionally remove 'alt' for the first image
                className="object-cover w-[100%] md:w-[90%] h-[399px]"
              />
            )}
              </div>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
        </div>
      </section>
    );
  };
  return <PrintOnCanvas />;
};
export default LatestCollection;
