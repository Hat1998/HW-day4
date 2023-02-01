import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContContainer from "./components/ContContainer";
import Riyadh from "./components/Riyadh";
import Saudi from "./components/Saudi";
import Italy from "./components/Italy";
import Rome from "./components/Rome";
import Egypt from "./components/Eg";
import Cairo from "./components/Q";


function App() {
  return (
    <Box bg={"#F0FFF0"}>
      <Routes>
        <Route path="/" element={<Nav />} >
          
          <Route index element={<ContContainer/>}/>
          <Route path="/Saudi" element={<Saudi/>}></Route> 
          <Route path="/Saudi/Riyadh" element={<Riyadh/>}></Route> 

          <Route path="/Italy" element={<Italy/>}></Route> 
          <Route path="/Italy/Rome" element={<Rome/>}></Route> 

          <Route path="/Egypt" element={<Egypt/>}></Route> 
          <Route path="/Egypt/Cairo" element={<Cairo/>}></Route> 
          
        </Route>
      </Routes>
       <Footer/>
       
       </Box>
  );
}

export default App;
