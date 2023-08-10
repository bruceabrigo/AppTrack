import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/home';
// import './App.css';

const App = () => {
 return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </>
 )
}

export default App;
