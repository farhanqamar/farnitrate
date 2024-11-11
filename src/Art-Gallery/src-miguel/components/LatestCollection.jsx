import { useRef } from 'react';
// import original from '../../assets/original.webp';
import original from "./original.webp"

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const LatestCollection = () => {
  // Replace with actual image imports or URLs
  const array2 = [
    "", original, original, original, original, original, original, original, original, original, original,
    original, original, original, original, original, original, original, original, original, original,
    original, original, original
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const PrintOnCanvas = () => {
    return (
      <section className='flex justify-end'>
        <div className="relative w-full">
          <div className="flex justify-around items-center">
            <h2 className="leading-10 py-12 px-20 text-3xl font-bold text-[#F6C936]">Our Latest Collection</h2>
            {/* Custom navigation buttons */}
            <div className="hidden md:flex justify-between items-center">
              <button ref={prevRef} className="swiper-button-prev-custom mx-4 border border-dashed border-[#F6C936] p-3">
                <FiChevronLeft className="text-xl text-[#F6C936]" />
              </button>
              <button ref={nextRef} className="swiper-button-next-custom mx-2 border border-dashed border-[#F6C936] p-3">
                <FiChevronRight className="text-xl text-[#F6C936]" />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={3}
            slidesPerView={4} // Default for large screens
            loop={false} // Disable infinite loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              // When window width is >= 1024px (large screens)
              1024: {
                slidesPerView: 4,
              },
              // When window width is >= 768px (medium screens)
              768: {
                slidesPerView: 3,
              },
              // When window width is >= 640px (small screens)
              640: {
                slidesPerView: 2,
              },
              // When window width is < 640px (very small screens)
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {array2.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className='w-fit'>
                  {image && (
                    <img
                      src={image}
                      alt={index === 0 ? "" : `Slide ${index + 1}`}
                      className="object-cover w-full md:w-[90%] h-[399px] "
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

  return <PrintOnCanvas />;
};

export default LatestCollection;
