import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./Login/Login";
import App2 from "./App2";


function App() {
  
  return (

    <>
    
    <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<Login />} />
      
        {/* Header Routes */}
        <Route path="/*" element={<App2 />} />
        
        
      </Routes>
      
     
    
    </>
    
      
          
            
          
   
    
  );
}

export default App;
