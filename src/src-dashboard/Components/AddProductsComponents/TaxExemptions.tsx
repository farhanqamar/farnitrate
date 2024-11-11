import React, {useState } from 'react';

const TaxExemptions = () => {
  const [isChcked, setIsChcked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChcked(!isChcked);
  };


  return (
    <section>
      <div className=' font-semibold bg-white sm:rounded-xl p-4 space-y-4' >
        <div>
          <input
            type="checkbox"
            checked={isChcked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
          />
          <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
            Collect tax
          </label>
        </div>

        {isChcked && (
          <div className='space-y-4'>
            <input
              type="text"
              placeholder="Enter some text"
              className='p-3 border border-black outline-none w-full rounded-lg'
            />
            <p className='text-[#9D9D9D]'>Tax exemptions labeled as (N/A) are not applicable because you're not collecting taxes in that region.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TaxExemptions;
