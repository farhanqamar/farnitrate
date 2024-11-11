import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ConsultingFAQ = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <section>
      <div className="text-[#F6C936] lg:w-2/5 m-auto space-y-10 p-6 lg:p-0">
        <div>
          <h1 className="md:text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        <div className="border-b-2 md:py-4">
          <h1
            onClick={() => setFirst(!first)}
            className="flex items-center list justify-between text:xl lg:text-2xl font-bold"
          >
            How does art wholesale work? <IoIosArrowDown />
          </h1>
          {first && (
            <div className="md:py-4">
              <p className="text-white list">
                You can purchase bulk artwork from our art gallery for your
                house, office, or any other space.
              </p>
            </div>
          )}
        </div>

        <div className=" md:py-4 border-b-2">
          <h1
            onClick={() => setSecond(!second)}
            className="flex list items-center justify-between text-2xl font-bold"
          >
            Does your gallery offer special wholesale pricing?
            <IoIosArrowDown />
          </h1>
          {second && (
            <div className="md:py-4">
              <p className="text-white list">
                Yes, we provide special wholesale pricing for larger orders. For
                more information, feel free to reach out to us or visit our art
                gallery in Cave Creek, Arizona.
              </p>
            </div>
          )}
        </div>
        <div className=" md:py-4">
          <h1
            onClick={() => setThird(!third)}
            className="flex list items-center justify-between text-2xl font-bold"
          >
            Place block title here <IoIosArrowDown />
          </h1>
          {second && (
            <div className="md:py-4">
              <p className="text-white list">Place block content here </p>
            </div>
          )}
        </div>
        {/*
                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setThird(!third)} className='flex items-center justify-between text-2xl font-bold'>Place block title here
                    <IoIosArrowDown />
                    </h1>
                    {third && (
                        <div className='py-4'>
                        <p className='text-white'>Yes, we do ship outside the US. The customer will bear the shipment cost, which can vary depending on your location. Please contact us for an accurate shipping cost.</p>
                        </div>
                    )}
                </div> */}
      </div>
    </section>
  );
};

export default ConsultingFAQ;
