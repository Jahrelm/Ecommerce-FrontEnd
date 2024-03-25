import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl ml-10">Logo</div>
        <ul className="flex justify-center font-bold text-l space-x-4"> 
          <li>
            <a href="#" className="text-white hover:text-gray-300 underline">
              Living Room
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Office
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Kitchen
            </a>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-300">
              Shop All
            </Link>
          </li>
        </ul>
        <div>
          <AiOutlineMenu className="text-white hover:text-gray-300 text-3xl mr-10" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
