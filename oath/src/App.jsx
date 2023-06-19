import { useState } from 'react'
import './App.css'
import Home from './Home';
import { Route, Routes, useNavigate } from "react-router-dom";

import PublicPage from './Public';
import { Button } from 'antd';


export default  function App() {


  return (
    <>
    <div className="whole">
    <Home/>
    </div>

    </>

  );
}


