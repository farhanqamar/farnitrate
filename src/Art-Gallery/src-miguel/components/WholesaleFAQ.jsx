import React from 'react';
import { IoIosArrowDown } from "react-icons/io";


const WholesaleFAQ = () => {
    const [first, setFirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);


  return (
    <section>
    <div className='text-[#F6C936] lg:w-2/5 m-auto space-y-10 p-6 lg:p-0'>
        <div>
            <h1 className='text-3xl font-bold'>Frequently Asked Questions</h1>
        </div>
        <div className='border-b-2 py-4'>
            <h1 onClick={() => setFirst(!first)} className='flex items-center justify-between text-2xl font-bold'>What does an art consultant do?
            <IoIosArrowDown />
            </h1>
            {first && (
                <div className='py-4'>
                <p className='text-white'>An art consultant is a person who advises clients on the purchase of art. The job description for an art gallery consultant may vary depending on the industry. Still, generally, they are responsible for helping buyers find quality pieces that fit within their budget and desired aesthetic.</p>
                </div>
            )}
        </div>

        <div className='border-b-2 py-4'>
            <h1 onClick={() => setSecond(!second)} className='flex items-center justify-between text-2xl font-bold'>What is the difference between a corporate art dealer and a corporate art consultant?
            <IoIosArrowDown />
            </h1>
            {second && (
                <div className='py-4'>
                <p className='text-white'>A corporate art consultant works with individual customers, acting as an impartial guide through obtaining a single art item or establishing a whole collection. Whereas, an art dealers job is to represent the artists and their work.</p>
                </div>
            )}
        </div>
    </div>
</section>
  )
}

export default WholesaleFAQ
