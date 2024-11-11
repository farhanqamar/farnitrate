import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const Faqs = () => {
    const[first, setFirst] = useState(false)
    const[second, setSecond] = useState(false)
    const[third, setThird] = useState(false)
  return (
    <section>
            <div className='text-[#F6C936] lg:w-2/5 m-auto space-y-10 p-6 lg:p-0'>
                <div>
                    <h1 className='text-3xl font-bold'>FAQs</h1>
                </div>
                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setFirst(!first)} className='flex items-center list justify-between text-3xl font-bold'>If I order fine art for sale today, how soon can you deliver it?
                    <IoIosArrowDown />
                    </h1>
                    {first && (
                        <div className='py-4'>
                        <p className='text-white'>If you order original art for sale with us today, it will be delivered to your doorstep in 5 working days. Regarding bulk orders, the delivery time can vary depending on the scenario.</p>
                        </div>
                    )}
                </div>

                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setSecond(!second)} className='flex items-center list justify-between text-3xl font-bold'>Where is your Art Gallery located?
                    <IoIosArrowDown />
                    </h1>
                    {second && (
                        <div className='py-4'>
                        <p className='text-white list'>Miguel Camarena Art Gallery is at 6220 E. Cave Creek Road, Cave Creek, AZ 85331. Feel free to stop by and visit our showroom!</p>
                        </div>
                    )}
                </div>

                <div className='border-b-2 py-4'>
                    <h1 onClick={() =>setThird(!third)} className='flex items-center justify-between text-3xl list font-bold'>If I live outside the US, can I place an order?
                    <IoIosArrowDown />
                    </h1>
                    {third && (
                        <div className='py-4'>
                        <p className='text-white list'>Yes, we do ship outside the US. The customer will bear the shipment cost, which can vary depending on your location. Please contact us for an accurate shipping cost.</p>
                        </div>
                    )}
                </div>

            </div>
    </section>
  )
}

export default Faqs
