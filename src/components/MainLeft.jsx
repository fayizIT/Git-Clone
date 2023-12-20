// Import necessary components and libraries

import { IoMdArrowDropdown } from 'react-icons/io';
import lists from "../lists.json";
import { Link } from 'react-router-dom';

// MainLeft component
function MainLeft() {
  return (
    <div className='mainLeftContainer'>
      <div className="mainLeft">
        {/* User info */}
        <div className="mainLeftName">
          <img src='https://avatars.githubusercontent.com/u/100133276?v=4' alt='profile' />
          <h2>FayizIT</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line separator */}
        <div className="line" />

        {/* Recent Repositories */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Repositories</h2>
            <button>New</button>
          </div>
          <div className="inputBox">
            <input type="text" placeholder='Find the repositories...' />
          </div>
        </div>

        {/* List of repositories */}
        <div className="mainLeftLists">
          {lists.map((item, idx) => (
            <div className="item" key={idx}>
              <img src='https://avatars.githubusercontent.com/u/100133276?v=4' alt='' />
              <div>
                <h2>{`${item.name}/${item.repo}`}</h2>
              </div>
            </div>
          ))}
          <Link to="/profile">Show more</Link>
        </div>

        {/* Line separator */}
        <div className="line" />

        {/* Recent Activities */}
        <div className='recentRepo'>
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>Thanks for watching</p>
        </div>

        {/* Line separator */}
        <div className="line" />

        {/* Your teams */}
        <div className='recentRepo'>
          <div className="recentRepos">
            <h2>Your teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type='text' placeholder='find a team....' />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the MainLeft component
export default MainLeft;
