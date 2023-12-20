// Import the necessary React component and MdInsertEmoticon icon from react-icons/md

import { MdInsertEmoticon } from 'react-icons/md';

// Left component
function Left() {
  return (
    <div className="left">
        
      {/* Image container */}
      <div className="image">

        {/* User profile image */}
        <img src="https://avatars.githubusercontent.com/u/100133276?v=4" alt="" />

        {/* Emoticon box */}
        <div className="emoticonBox">

          {/* Emoticon icon */}
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      {/* Left details container */}
      <div className="leftDetails">

        {/* User name */}
        <h2>FayizIT</h2>
        
        {/* Edit profile button */}
        <button>Edit profile</button>
      </div>
    </div>
  );
}

// Export the Left component
export default Left;
