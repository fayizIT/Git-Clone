// Import necessary components and icons
// import React from 'react';
import { IoBulbOutline } from 'react-icons/io5';
import { MdRssFeed } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// MainRight component
function MainRight() {
  // Define following and followers count
  const followingCount = 24;
  const followersCount = 100;

  return (
    <div className="mainRight">
      <div className="mainRightContainer">


        {/* Following and Followers section */}
        <div className="mainRightText">
          <div className="followCount">
            <h2>Following</h2>
            <span style={{ display: 'block', textAlign: 'center' }}>{followingCount}</span>
          </div>
          <div className="followCount">
            <h2>Followers</h2>
            <span style={{ display: 'block', textAlign: 'center' }}>{followersCount}</span>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="lineTwo" />

        {/* Welcome box */}
        <div className="box">
          <h2>Welcome to Github Homepage... this Github  page Design using React.js, React-Router, and SCSS</h2>
          <p>
            Follow me on <span>YouTube</span>, <span>Twitter</span>, and <span>Facebook</span>
          </p>


          {/* GitHub Clone button */}
          <button className="btn">
            <Link to="/profile">GitHub Clone</Link>
          </button>
        </div>


        {/* Info boxes */}
        <div className="boxcenter">
          <div className="boxcenterFirst">
            <p>
              <IoBulbOutline />
              On my channel, there are videos with <span>React</span>, <span>Next.js</span>, <span>Tailwind CSS</span>,{' '}
              <span>HTML</span>, and <span>CSS</span>
            </p>
          </div>
          <div className="boxCenterFirst">
            <p>
              <MdRssFeed />
              Subscribe to the channel to stay updated
            </p>
          </div>
        </div>


        {/* Footer component */}
        <Footer />


      </div>
    </div>
  );
}

// Export the MainRight component
export default MainRight;
