
import { AiOutlineInbox } from 'react-icons/ai';
import { TbBook, TbBook2 } from 'react-icons/tb';
import { FiBox, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Left from '../components/Left';
import Overview from '../components/Overview';

function Profile() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const iconStyle = {
    marginBottom: '8px', // Adjust the margin as needed
  };

  return (
    <div className="profile">
      <nav>
        <div className="profileIcon">
          <Link to="https://github.com/fayizIT" style={linkStyle}>
            <TbBook style={iconStyle} />
            <h2 style={linkStyle}>Overview</h2>
          </Link>
        </div>
        <div className="profileIcon">
          <Link to="https://github.com/fayizIT?tab=repositories" style={linkStyle}>
            <TbBook2 style={iconStyle} />
            <h2 style={linkStyle}>Repositories</h2>
          </Link>
        </div>
        <div className="profileIcon">
          <Link to="https://github.com/fayizIT?tab=projects" style={linkStyle}>
            <AiOutlineInbox style={iconStyle} />
            <h2 style={linkStyle}>Projects</h2>
          </Link>
        </div>
        <div className="profileIcon">
          <Link to="https://github.com/fayizIT?tab=packages" style={linkStyle}>
            <FiBox style={iconStyle} />
            <h2 style={linkStyle}>Packages</h2>
          </Link>
        </div>
        <div className="profileIcon">
          <Link to="https://github.com/fayizIT?tab=stars" style={linkStyle}>
            <FiStar style={iconStyle} />
            <h2 style={linkStyle}>Stars</h2>
          </Link>
        </div>
      </nav>
      <div className="lineFour" />
      <div className="sectionCenter">
        <Left />
        <Overview />
      </div>
    </div>
  );
}

export default Profile;
