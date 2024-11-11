import {useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import {  menu, submenu } from './MenuItems'
import { Link } from 'react-router-dom'
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";



const ResponsiveMenuBar = ({ closeMenu }) => {
  const [activeIndex, setActiveIndex] = useState(null);
const [activeSubIndex, setActiveSubIndex] = useState(null);
const [menuOpen, setMenuOpen] = useState(true);
const [subMenu, setSubMenu] = useState(false); 

const handleItemClick = (index, itemName) => {
  setActiveIndex(index);

  if (itemName !== 'Services') {
    setMenuOpen(false);
    setSubMenu(false); 
    closeMenu();
  }
};

const handleSubItemClick = (subIndex) => {
  setActiveSubIndex(subIndex);
  setSubMenu(false); 
};

const openSubMenu = () => {
  setSubMenu(true); 
  setMenuOpen(false);
};
  return (
    <section>
    <div className={`bg-black p-6 ${menuOpen ? '' : 'hidden'}`}>
    <div className='flex items-center space-x-4 border-b py-4 static'>
      <FaSearch className='text-[#F6C936]'/>
      <input type="text" placeholder='Search our store' className='bg-transparent outline-none text-lg text-white'/>
    </div>
    <ul>
      {menu.map((item, index) => (
        <li key={index} className="border-b py-6">
          <div className='flex justify-between'>
            <Link
              onClick={() => {handleItemClick(index, item.name);  setMenuOpen(false); closeMenu()}}
              className={`${activeIndex === index ? 'text-yellow-500' : 'text-white'} flex justify-between`}
              to={item.to}
            >
              {item.name}
            </Link>
             <div>
              {item.name === 'Services' && (
                  <span>
                    <IoIosArrowForward onClick={openSubMenu} className='text-2xl text-white'/>
                  </span>
                )}
             </div>
          </div>
        </li>
      ))}
    </ul>
    <div className='flex space-x-3 py-4 text-[#F6C936]'>
      
        <CiUser className='text-2xl'/> 
     
      <li className='list-none'> 
          Login
        </li>
    </div>
         
  </div>
  <div className={`${!subMenu ? 'hidden' : ''}`}>
      <div>
        <ul className="text-base">
          <div className="text-white border-b flex items-center text-xl py-6 p-3">
            <MdArrowBackIos onClick={() => {setSubMenu(false); setMenuOpen(true)}} className='text-yellow-500'/>
            <li className="m-auto">Services</li>
          </div>
          {submenu.map((subItem, subIndex) => (
            <li key={subIndex} className="border-b py-6 px-4">
              <Link
                onClick={() => {handleSubItemClick(subIndex); closeMenu()}}
                className={`${activeSubIndex === subIndex ? 'text-yellow-500' : 'text-white'}`}
                to={subItem.to}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section> 
  )
}

export default ResponsiveMenuBar;
