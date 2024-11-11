import React from "react";

const cards = [
  {
    heading: "Custom Prints And Orders",
    text: "We accept customized and personalized orders. Additionally, all our Giclee prints are available in various sizes. We also offer a hand embellishment service to add colours that perfectly complement your wall theme.",
    button: "Learn More",
  },
  {
    heading: "Art Consultancy",
    text: "With decades of expertise in the field, we understand what art, theme, colour, and size will perfectly suit your space. Our specialized team of artists is ready to visit your location and provide expert art consulting, whether it's for your home or office. We welcome all your artistic requirements.",
    button: "Learn More",
  },
  {
    heading: "Wholesale Art",
    text: "We also entertain bulk orders for original and Giclee prints. With our large setup, we can meet your large-scale art requirements. Whether you're seeking paintings for hospitals, restaurants, museums, hotels, or resorts, we are dedicated to fulfilling your artistic needs.",
    button: "Learn More",
  },
  {
    heading: "Renting Art For Staging",
    text: "Are you aiming to sell your home at a premium price but need help finding exquisite art for aesthetic home decoration? Fret not! We offer art for staging to Arizona homeowners and real estate brokers to meet all your home decoration requirements.",
    button: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="pb-[100px] pt-[40px]">
      <h2 className="text-center text-3xl font-black tracking-wide p-[12px] my-[26.56px] ">
        Our Services In Arizona
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center px-5 sm:px-[56px] lg:w-[1083px] xl:w-[1300px] m-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-black object-cover p-5 border text-center w-full mt-10 flex flex-col flex-1 lg:w-[304px] xl:w-[404px]"
          >
            <h4 className="text-[#F6C934] list text-xl pb-2">{card.heading}</h4>
            <p className="leading-8 list text-white ">{card.text}</p>
            <button className="btn text-[18px] my-[7px] md:text-[20px] custom-underline text-yellow-400">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
