import { useState } from "react";
import { IoSearch, IoFilter, IoCloseCircleOutline } from "react-icons/io5";
import React from "react";
const Dropdown = () => {
    
    const [inputData, setInputData] = useState<boolean>(true);
    const [placeholder, setPlaceholder] = useState("Apps");

    const handleChange = () => {
        setInputData(!inputData);
    };

    const updatePlaceholder = (newPlaceholder: string) => {
        setPlaceholder(newPlaceholder);
    };



    return (
        <>
            <section className="min-w-[202px]">
                {/* Input Part */}
                {inputData && (
                    <div className="bg-[#fdfdfd] p-2 rounded-xl z-30">
                        <form className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <IoSearch />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-10 px-2 py-1 border-2 border-black rounded-md"
                            />
                            <button
                                onClick={handleChange}
                                className="absolute right-3 top-2 text-gray-500 p-1 bg-[#EBEBEB] rounded-lg"
                            >
                                <IoFilter />
                            </button>
                        </form>

                        <div className="p-3">
                            <div className="flex flex-wrap flex-row gap-3">
                                <FlexSearchButtons text="Apps" />
                                <FlexSearchButtons text="Customers" />
                                <FlexSearchButtons text="Orders" />
                                <FlexSearchButtons text="Products" />
                                <FlexSearchButtons text="Sales channels" width="118px"/>
                            </div>
                            <div className="py-5 flex flex-col items-center gap-4">
                                <span className="text-6xl text-[#c5c5c5]">
                                    <IoSearch />
                                </span>
                                <p className="text-lg font-medium text-[#8f8f8f]">Find anything in My Store</p>
                            </div>
                        </div>
                    </div>
                )}

                {!inputData && (
                    <div className="bg-white p-2 rounded-xl">
                        <form action="" className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <IoSearch />
                            </span>
                            <input
                                type="text"
                                placeholder={placeholder}
                                className="w-full pl-10 pr-10 px-2 py-1 border-2 border-black rounded-md"
                            />
                            <div className="absolute right-3 top-2 flex gap-3">
                                <button className="relative" onClick={handleChange}>
                                    <IoCloseCircleOutline />
                                </button>
                                <button
                                    onClick={handleChange}
                                    className="text-gray-500  p-1 rounded-lg"
                                >
                                    <IoFilter />
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col pt-3 pb-1">
                            <NonFlexSearchButtons text="Apps" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Customers" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Orders" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Products" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Sales channels" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Articles" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Blogs" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Collections" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Companies" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Pages" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Collections" updatePlaceholder={updatePlaceholder} />
                            <NonFlexSearchButtons text="Settings" updatePlaceholder={updatePlaceholder} />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};


interface FlexSearchButtonsProps {
    text: string;
    width?: string
}

const FlexSearchButtons = ({ text, width }: FlexSearchButtonsProps) => {
    return (
        <button className={`bg-[#EBEBEB] px-2 rounded-lg ${width}`}>{text}</button>
    )
}



interface NonFlexSearchButtonsProps {
    text: string;
    updatePlaceholder: (newPlaceholder: string) => void;
}

const NonFlexSearchButtons = ({ text, updatePlaceholder }: NonFlexSearchButtonsProps) => {
    return (
        <div
            onMouseEnter={() => updatePlaceholder(text)}
            className="p-2 rounded-lg hover:bg-[#F7F7F7]"
        >
            <button className="bg-[#EBEBEB] px-2 rounded-lg text-sm max-w-max">{text}</button>
        </div>
    );
};

export default Dropdown;