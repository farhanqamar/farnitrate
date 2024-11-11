import { useState } from 'react';
import React from 'react';

const DefaultAddress = () => {
    const [selectedName, setSelectedName] = useState('');
    const [showDropdonName, setShowDropdonName] = useState(false);
  
    const handleSelectName = (name: string) => {
      setSelectedName(name);
      setShowDropdonName(false);
    };
    const [selectedCod, setSelectedCod] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSelectCod = (code: string) => {
      setSelectedCod(code);
      setShowDropdown(false);
    };
  return (
    <section className=''>
        <div className='space-y-4 p-6 sm:rounded-xl bg-white text-sm'>
            <div>
                <h1 className='text-base font-semibold'>Default Address</h1>
                <p>The primary address of this customer</p>
            </div>
            <div>
             <label className='text-sm p-1' htmlFor="">Country/region</label>
                <div className="flex space-x-2 ">
                    <div className=' w-full relative space-y-4'>

                                    <input
                                        type="text"
                                        value={selectedName}
                                        onClick={() => setShowDropdonName(!showDropdonName)}
                                        readOnly
                                        placeholder="Pakistan"
                                        className='w-full p-2 border border-black rounded-lg'
                                    />
                                    
                                    <div className='flex flex-col w-full py-2'>
                                        <label htmlFor="">Harmonized System (HS) Code</label>
                                        <input type="text" placeholder='Search By Product KeyWord Or Code' className='w-full p-2 border border-black rounded-lg'/>
                                    </div>

                                    {showDropdonName && (
                                        <div
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            width: '100%',
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            border: '1px solid #ccc',
                                            backgroundColor: '#fff',
                                            zIndex: 1,
                                        }}
                                        >
                                        {countryCodes.map((country, index) => (
                                            <div
                                            key={index}
                                            onClick={() => handleSelectName(country.name)}
                                            style={{ width: '100%', padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
                                            >
                                            {country.name}
                                            {/* ({country.code}) */}
                                            </div>
                                        ))}
                                        </div>
                                    )}
                                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0'>
                <div className="flex flex-col w-full">
                     <label className=' text-sm p-1' htmlFor="">First Name</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                </div>
                 <div className="flex flex-col w-full">
                     <label className='text-sm p-1' htmlFor="">Last Name</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                 </div>
            </div>
            <div className="w-full flex flex-col space-y-3">
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Company</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Address</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Apartment, suite, etc.</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>

            </div>
            <div className='flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0'>
                <div className="flex flex-col w-full">
                     <label className=' text-sm p-1' htmlFor="">City</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                </div>
                 <div className="flex flex-col w-full">
                     <label className='text-sm p-1' htmlFor="">Postal Code</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                 </div>
            </div>
            <div>
             <label className='text-sm p-1' htmlFor="">Phone</label>
                <div className="flex space-x-2 ">
                    <div className='relative w-[80px]'>

                                    <input
                                        type="text"
                                        value={selectedCod}
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        readOnly
                                        placeholder="country code"
                                        className='border border-black rounded-lg w-full p-2'
                                    />


                                    {showDropdown && (
                                        <div
                                        className="absolute top-full left-0 w-full max-h-[200px] overflow-y-auto border border-gray-300 bg-white z-10"
                                        >
                                        {countryCodes.map((country, index) => (
                                            <div
                                            key={index}
                                            onClick={() => handleSelectCod(country.code)}
                                            style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
                                            >
                                            {/* {country.name} */}
                                            ({country.code})
                                            </div>
                                        ))}
                                        </div>
                                    )}
                                    </div>

                        <input
                         type="text"
                        className="w-full border border-black rounded-lg p-1"
                        placeholder="Enter a number"
                        />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DefaultAddress
