import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import sliderimg from "./giclee_img_3.webp"
// Sample data for the paintings
const paintings = [
  {
    id: "AB#006",
    title: "Abstract Painting 06",
    image: sliderimg, // Replace with your image paths
    price: 100, // Add the price here
  },
  {
    id: "AB#008",
    title: "Abstract Painting 08",
    image: sliderimg,
    price: 150, // Add the price here
  },
  {
    id: "AB#005",
    title: "Gorgeous Abstract Painting",
    image: sliderimg,
    price: 120, // Add the price here
  },
  {
    id: "AB#004",
    title: "Abstract Painting",
    image: sliderimg,
    price: 110, // Add the price here
  },
  {
    id: "AB#005",
    title: "Gorgeous Abstract Painting",
    image: sliderimg,
    price: 120, // Add the price here
  },
  {
    id: "AB#004",
    title: "Abstract Painting",
    image: sliderimg,
    price: 110, // Add the price here
  },
];


const Sliders = ({ mainHeading }) => {
  // Custom navigation references
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="mx-auto">
      {/* Custom navigation buttons positioned at the top */}
      <div className="sm:flex justify-between px-4 sm:mx-[25%]">
        <h2 className="text-yellow-400 text-3xl py-8 font-extrabold mb-4">
          {mainHeading}
        </h2>
        <div className="hidden md:block py-8">
          <button
            ref={prevRef}
            className="text-yellow-400 bg-black py-1 px-3 border border-dotted border-[#F6C934] mr-3"
          >
            &lt;
          </button>
          <button
            ref={nextRef}
            className="text-yellow-400 bg-black py-1 px-3 border border-dotted border-[#F6C934]"
          >
            &gt;
          </button>
        </div>
      </div>
      {/* Swiper Slider */}
      <div className="relative p-2 md:ml-[25%]">
        <Swiper
          modules={[Navigation]}
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
            // when window width is >= 640px
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4, // 4 slides on extra-large screens
            },
          }}
        >
          {paintings.map((painting) => (
            <SwiperSlide key={painting.id} className="swiper-slide">
              <div className="group ">
                <div
                  className="overflow-hidden"
                  
                >
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="h-[433px] shadow-lg transform transition duration-300 scale-110 group-hover:scale-125"
                  />
                </div>
                <p className="text-yellow-400 mt-2 list">{painting.title}</p>
                <p className="text-yellow-400 mt-2 list">
                  {painting.price ? `From $ ${painting.price}` : ""}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Sliders;
