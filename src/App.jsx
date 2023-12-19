import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import "./app.scss"


function App() {


  return (
    <BrowserRouter>
    <div className="App">
    
    
    
     <Navbar/>
     <Routes>

     < Route path="/" element={<Main/>}/>
     </Routes>
     
     
   
    
    </div>
    </BrowserRouter>
  )
}

export default App;
