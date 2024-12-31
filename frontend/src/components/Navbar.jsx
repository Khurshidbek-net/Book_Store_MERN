import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import avatar  from '../assets/avatar.png'


const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];
const Navbar = () => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to={"/"}>
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#eaeaea] w-full py-1 md:px-8 px-6 rounded-md"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {
              currentUser ? 
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img src={avatar} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
                </button>
                {
                  isDropDownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item) =>(
                            <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </> : <Link to={'/login'}><HiOutlineUser className="size-6" /></Link>
            }
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link
            to={"/cart"}
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <MdShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar