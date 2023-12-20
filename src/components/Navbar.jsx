// Import React and useState from 'react'
import  { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import github from './img/github.png';
import { Link } from 'react-router-dom';
import Menu from './Menu';

// Navbar component
const Navbar = () => {
  // Use the useState hook to declare state variables
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* left */}
      <div className="navLeft">
        <Link to="/">
          <img src={github} alt="Website logo" />
        </Link>
        <div>
          <input type="text" placeholder="Search or jump" />
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
        <FaBell />
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
          <img src="https://avatars.githubusercontent.com/u/100133276?v=4" alt="profile" />
        </div>
      </div>
      {showMenu && <Menu />} {/* Render Menu component conditionally based on showMenu state */}
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
