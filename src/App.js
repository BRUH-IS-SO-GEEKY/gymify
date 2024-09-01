import './App.css';
import React from 'react'
import NavBar from './pages/NavBar'
import Brands from './pages/Brands'
import Communities from './pages/Communities'
import Influencers from './pages/Influencers'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Communities/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/communities' element={<Communities/>} />
        <Route path='/influencers' element={<Influencers/>} />
      </Routes>
    </div>
  )
}

export default App;
