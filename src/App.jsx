import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" ;
import { Home } from './pages/home/homeScreen';
import  NavBar  from './pages/home/NavBar';


function App() {
  return (
    <div className='App'>
      <Router>
        <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
        </Routes>
        </div>
      </Router>
       
  </div>
)
}
export default App
