import React from 'react';

const Welcome = () => {
  return (
<div className=' mb-[40px]'>
        <div className="pt-[40px] flex flex-col p-5 items-center md:px-8 lg:px-16 my-10px">
        <h1 className='font-bold my-[32px] md:font-black  lg:text-4xl text-2xl text-center'>
          Welcome To The World Of Art
        </h1>
        <div
          className="space-y-4 mb-4 leading-7 lg:w-2/5 w-full text-center"
        
        >
          
         <p> <strong className="italic list text-white my-[18px] leading-7">
            Discover the majestic creations of Miguel Camarena.
          </strong>
          </p>
          
          <p className='text-white list'>
            Featuring original artwork by world-renowned artist Miguel
            Camarena as well as high-quality canvas prints available in
            various sizes (custom sizes and wholesale pricing are <br/> available).
            <br /><br/>
            Our showroom is located at 6220 E Cave Creek Rd., Cave Creek,
            Arizona 85331. Open 7 days a week from 10 a.m. to 6 p.m. Feel free
            to call or text (480) 595-2671 with any questions, or <br/> send us an
            email at&nbsp;
            <a
              className="border-b text-[18px] list text-white"
              href="mailto:camarenamart@gmail.com"
            >
              camarenamart@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
