import React from "react";
import Header from "./header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "./category/Category";
import Chart from "./Chart/Chart";
import Login from "./Login/Login";

const App = () => {
  const Location = useLocation();

  const navi = Location.pathname==="/Chart"
  return (
    <> 
      {navi && <Header/>}
      {navi && <Category/>}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Chart" element={<Chart />} />
      </Routes>
    </>
  );
};

export default App;
