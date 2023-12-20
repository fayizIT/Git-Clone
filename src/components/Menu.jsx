// Import necessary components and icons
import { Link } from 'react-router-dom';

// Menu component
function Menu() {
  return (
    <div className="menu">
      <div className="menuContainer">
        {/* User information */}
        <p>
          Signed in as <br />
          FayizIT (Fayiz CJ)
        </p>
        <div className="lineThree" />

        {/* Status input */}
        <div className="menuStatus">
          <input type="text" placeholder="Set Status" />
        </div>

        <div className="lineThree" />

        {/* Profile and Repository links */}
        <p>
          <Link to="/profile">Your Profile</Link>
        </p>
        <p>
          <Link to="/https://github.com/fayizIT?tab=repositories">Your Repositories</Link>
        </p>
        <p>
          <Link to="#">Your Codespaces</Link>
        </p>
        <p>
          <Link to="#">Your Organizations</Link>
        </p>
        <p>
          <Link to="/https://github.com/fayizIT?tab=projects">Your Projects</Link>
        </p>
        <p>
          <Link to="/https://github.com/fayizIT?tab=stars">Your Stars</Link>
        </p>
        <p>
          <Link to="/https://gist.github.com/fayizIT">Your Gists</Link>
        </p>

        <div className="lineThree" />

        {/* Upgrade, Feature, Help, and Settings */}
        <p>Upgrade</p>
        <p>Feature</p>
        <p>Help</p>
        <p>Settings</p>

        <div className="lineThree" />

        {/* Sign out link */}
        <p>
          <a href="https://github.com/logout">Sign out</a>
        </p>
      </div>
    </div>
  );
}

// Export the Menu component
export default Menu;
