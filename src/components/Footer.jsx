// Import the GitHub logo image
import github from './img/github.png';

// Footer component
function Footer() {
  return (
    <div>
      {/* Main footer container */}
      <div className="footer">
        {/* First section of the footer */}
        <div className="footerFirst">
          {/* GitHub logo */}
          <img src={github} alt="Website logo" />
          {/* GitHub Clone heading */}
          <h4>GitHub Clone</h4>
        </div>

        {/* Second section of the footer */}
        <div className="footerSecond">
          {/* Inside the second section */}
          <div className="footerSecondInside">
            <h4>Blog</h4>
            <h4>About</h4>
            <h4>Shop</h4>
            <h4>GitHub Clone</h4>
            <h4>Pricing</h4>
          </div>

          {/* Inside the second section */}
          <div className="footerSecondInside">
            <h4>API</h4>
            <h4>Training</h4>
            <h4>Status</h4>
            <h4>Security</h4>
          </div>

          {/* Inside the second section */}
          <div className="footerSecondInside">
            <h4>Terms and conditions</h4>
            <h4>Privacy</h4>
            <h4>Docs</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
