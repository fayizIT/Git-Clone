// import React from 'react';
import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import github from '../assets/github.png'



const Navbar = () => {
  return (
   <nav className="navbar">

    <div className="navleft">
    <img src={github} alt="Website logo" />
   
   
{/* left */}
   <div>
    <input type="text" placeholder="Search or jumb"/>
   </div>
   </div>

   {/* center */}
   <div className="navCenter">
    <h2>pulls</h2>
    <h2>Isues</h2>
    <h2>MarketPlace</h2>
    <h2>Explore</h2>
   </div>

   {/* Right */}

   <div className="navRight">
<FaBell/>
<div className="navRightIcons">
  <FiPlus/>
  <IoMdArrowDropdown/>
</div>
</div>
   </nav>
  );
};

export default Navbar;