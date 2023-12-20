import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./pages/Profile";
import "./app.scss"


function App() {
  return (
    // Using BrowserRouter to enable routing
    <BrowserRouter>
      <div className="App">
        
        {/* Navbar component */}
        <Navbar />

        {/* Routes for navigation */}
        <Routes>

          {/* Main component route */}
          <Route path="/" element={<Main />} />

          {/* Profile component route */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component
export default App;