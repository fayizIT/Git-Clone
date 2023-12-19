// import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import {MDRssFeed} from "react-icons/md";
import { IoBulbOutline } from 'react-icons/io5'
import { MdRssFeed } from 'react-icons/md';


function MainRight() {
  return(
  <div className="mainRight">
  <div className="mainRightContainer">
  <div className="mainRightText">
  <h2>Following</h2>
  <h2>For you</h2>
  </div>
  I
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
      <a href='#'>GitHub Clone</a>
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
  </div>
  </div>
  )
  }

export default MainRight