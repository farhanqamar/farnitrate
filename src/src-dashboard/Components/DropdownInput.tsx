import React, {useState} from 'react'


interface DropDownOption {
    options : string[];
}
const DropdownInput = ({options}:DropDownOption) => {

    const [inputValu, setInputValu] = useState('')
    const [showDropdwn, setShowDropdwn] = useState(false)
  return (
    <div className='relative'>
    <input type="text" className='border border-black rounded-lg p-1 w-full text-base font-normal text-gray' value={inputValu} onClick={() => setShowDropdwn(!showDropdwn)} placeholder='Select an Option' readOnly/>
    {showDropdwn && (
        <div className='absolute bg-white w-full p-2 space-y-2 '>
            {options.map((option:string, index:any) => (
                <div className='hover:bg-blue-500 text-base hover:text-black p-1 rounded-lg' key={index} onClick={()=>{ setInputValu(option); setShowDropdwn(false)}}>
                    {option}
                </div>
            ))}
        </div>
    )}
    
</div> 
  )
}

export default DropdownInput
