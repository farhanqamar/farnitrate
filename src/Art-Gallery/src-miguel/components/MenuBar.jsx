import { useState } from 'react'
import {  menu } from './MenuItems'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
    return (
    <nav>
      <div className="hidden lg:block">
        <ul className="flex justify-center space-x-8 font-semibold text-lg border-b-2 text-yellow-500 py-4">
          {menu.map((data, index) => (
            <li key={index} className="relative">
              {/* Main menu item */}
              <Link
                onClick={() => {setActiveIndex(activeIndex === index ? null : index); setSelectedSubItem(null)}} // Toggle the active state
                className={`${
                  activeIndex === index ? 'text-yellow-500' : 'text-white'
                }`}
                to={data.to}
              >
                {data.name}
              </Link>

              {/* Render bottom line if active */}
              {(activeIndex === index ||  (selectedSubItem && activeIndex === index)) && (
                <hr className="w-auto h-[2px] bg-yellow-500 mt-2" />
              )}

              {/* Render sub-items if they exist and the parent is active */}
              {data.subItems && activeIndex === index && (
                <ul className="absolute left-0 mt-2 bg-black text-[#f6c936] shadow-lg rounded-md">
                  {data.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="w-[300px] p-4 py-4 text-gray-700 hover:text-yellow-500 ">
                      <Link  onClick={() => {
                          setSelectedSubItem();
                            setActiveIndex(null)
                      }} to={subItem.to}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MenuBar
