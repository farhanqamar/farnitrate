import React,{ useState, useRef } from "react";
import useOutsideClick  from './useOutsideClick';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
    });

    return (
        <>
           <div ref={dropdownRef}>
           <button 
                className="border-emerald-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                my button
            </button>

            {isOpen && (
                <div className="relative top-5">
                    <p>my name is parhan</p>
                </div>
            )}
           </div>
        </>
    );
};

export default Dropdown;