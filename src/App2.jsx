import React from "react";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";
import Category from "./category/Category";
import Chart from "./Chart/Chart";



const App2 = () => {



  return (
    <>
      <Header />
      <Category/>
      <Routes>
        <Route path="/Chart" element={<Chart />} />
      </Routes>
      
    </>
  );
};

export default App2;
