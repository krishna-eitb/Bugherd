import React from "react";
import { FaTachometerAlt, FaClipboard, FaTasks, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaComment ,FaUsers} from 'react-icons/fa';



const Sidebar = () => {
  return (
    <div className="w-[22%] sticky h-screen shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  flex flex-col items-center justify-between  p-6 ">
      {/* Logo */}
      <div className="text-3xl rounded-full bg-gray w-full font-bold text-center p-4  ">
        <span className="">Bugherd</span>
      </div>

      {/* Links */}
      <div className="flex flex-col items-start gap-5 w-full text-center border-t-2 border-b-2  border-[#bfeb9c] pt-6 pb-6">
      <NavLink className="w-full" to="/">
        <div className="w-full flex rounded-3xl border-2 border-transparent hover:rounded-3xl hover:bg-[#ededed]  hover:border-2 hover:border-[#bfeb9c] p-3 items-center justify-start space-x-4 transition-all duration-300 ease-in-out">
          <FaTachometerAlt className="text-neon-green text-2xl " />
          <span className="text-lg font-semibold"> Dashboard</span>
        </div>
        </NavLink>
        <NavLink className="w-full"  to="board">
        <div className="w-full flex rounded-3xl border-2 border-transparent hover:rounded-3xl hover:bg-[#ededed]  hover:border-2 hover:border-[#bfeb9c] p-3 items-center justify-start space-x-4 transition-all duration-300 ease-in-out">
          <FaClipboard className="text-neon-green text-2xl" />
          <span className="text-lg font-semibold">Boards</span>
        </div>
        </NavLink>

        <NavLink className="w-full">
        <div className="w-full flex rounded-3xl border-2 border-transparent hover:rounded-3xl hover:bg-[#ededed]  hover:border-2 hover:border-[#bfeb9c] p-3 items-center justify-start space-x-4 transition-all duration-300 ease-in-out">
          <FaTasks className="text-neon-green text-2xl" />
          <span className="text-lg font-semibold">Tasks</span>
        </div>
        </NavLink>
        <NavLink className="w-full">
        <div className="w-full flex rounded-3xl border-2 border-transparent hover:rounded-3xl hover:bg-[#ededed]  hover:border-2 hover:border-[#bfeb9c] p-3 items-center justify-start space-x-4 transition-all duration-300 ease-in-out">
          <FaUsers className="text-neon-green text-2xl" />
          <span className="text-lg font-semibold">Team Members</span>
        </div>
        </NavLink>
        <NavLink className="w-full">
        <div className="w-full flex rounded-3xl border-2 border-transparent hover:rounded-3xl hover:bg-[#ededed]  hover:border-2 hover:border-[#bfeb9c] p-3 items-center justify-start space-x-4 transition-all duration-300 ease-in-out">
          <FaCog className="text-neon-green text-2xl" />
          <span className="text-lg font-semibold">Settings</span>
        </div>
        </NavLink>
      </div>
      {/* navigation */}
      {/* social icons */}
      <div className="flex items-center gap-4">
  <a
    href="https://github.com/yourusername" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black rounded-full p-2"
  >
    <FaGithub className="text-neon-green text-2xl"  />
  </a>
  <a
    href="https://www.linkedin.com/in/yourusername" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black rounded-full p-2"
  >
    <FaLinkedin className="text-neon-green text-2xl"  />
  </a>
  <a
    href="mailto:youremail@example.com" 
    className="bg-black rounded-full p-2"
  >
    <FaEnvelope className="text-neon-green text-2xl"  />
  </a>
  <a
    href="https://chat.example.com" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black rounded-full p-2"
  >
    <FaComment className="text-neon-green text-2xl"  />
  </a>
</div>

      {/* social icons */}
      
    </div>
  );
};

export default Sidebar;
