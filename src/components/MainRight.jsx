// import React from 'react'
// import { IoMdArrowDropdown } from 'react-icons/io';
import { IoBulbOutline } from 'react-icons/io5'
import { MdRssFeed } from 'react-icons/md';
import github from './img/github.png';
import { Link } from 'react-router-dom';


function MainRight() {
  return(
  <div className="mainRight">
  <div className="mainRightContainer">
  <div className="mainRightText">
  <h2>Following</h2>
  <h2>For you</h2>
  </div>
  <div className="lineTwo"/>
  <div className='box'>
  <h2>
    Welcome... this Github page Design using react js 
  </h2>
  <p>Follow me on <span>You Tube
    </span>,<span>Twitter
    </span> and <span>FaceBook
    </span></p>

    <button className='btn'>
    <Link to="/profile">GitHub Clone</Link>
    </button>
    </div>
    <div className="boxcenter">
      <div className="boxcenterFirst">
        <IoBulbOutline/>
        <p>
          On my Channel there are videos with <span>React</span>,<span>Next js</span><span>Tailwind Css</span><span>Html and css</span>
        </p>
      </div>
      <div className="boxCenterFirst">
        <MdRssFeed/>
        <p>Subscribe to the channel, to Stay updated</p>
      </div>
    </div>

    {/* footer */}
    <div className="footer">
    <div className="footerFirst">
    <img src={github} alt="Website logo" />
        <h4>GitHub Clone</h4>
    </div>
    <div className='footerSecond'>
      <div className="footerSecondInside">
        <h4>Blog</h4>
        <h4>About</h4>
        <h4>Shop</h4>
        <h4>GitHub Clone</h4>
        <h4>Pricing</h4>
      </div>
      <div className="footerSecondInside">
        <h4>API</h4>
        <h4>Training</h4>
        <h4>Status</h4>
        <h4>Security</h4>
      </div>
      <div className="footerSecondInside">
        <h4>Terms and condition</h4>
        <h4>Privacy</h4>
        <h4>Docs</h4>
      </div>
    </div>
</div>

  </div>
  </div>
  )
  }

export default MainRight