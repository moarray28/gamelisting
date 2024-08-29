import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GameDetail from './components/Gamedetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
 
  
  return (
    <>
  <Router>
      <div>
        <Navbar /> {/* Navbar will be displayed on all pages */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetail />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
     </>
  )
}

export default App
