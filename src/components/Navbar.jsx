import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav       className=" bg-gray-800 shadow-md py-4 px-6 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <p className="text-2xl font-bold text-yellow-400">Lidiya Haile</p>

       
        <ul className="flex justify-evenly flex-1 max-w-md font-medium text-white text-lg">
          <li className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer">
            <FaHome />
            <a href="#home">Home</a>
          </li>
          <li className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer">
            <FaUser />
            <a href="#about">About me</a>
          </li>
          <li className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer">
            <FaProjectDiagram />
            <a href="#projects">Projects</a>
          </li>
          <li className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer">
            <FaEnvelope />
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
