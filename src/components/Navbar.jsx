// import React from 'react';
// import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
// import github from '../assets/github.png';
import github from './img/github.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false)
  return (
   <nav className="navbar">
{/* left */}
    <div className="navLeft">
      <Link to="/">
      <img src={github} alt="Website logo" />
      </Link>
    
   
   

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
<div className="navRightIcons">
  <img src='https://avatars.githubusercontent.com/u/100133276?v=4' alt='profile'></img>
</div>
</div>
{showMenu && <Menu/>}
   </nav>
  );
};

export default Navbar;
