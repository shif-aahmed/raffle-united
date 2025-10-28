import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import PreviousWinners from './pages/PreviousWinners/PreviousWinners'
import LiveCompetition from './pages/LiveCompetition/LiveCompetition'
import HowTOPlay from './pages/HowTOPlay/HowTOPlay'
import FinishedCompetition from './pages/FinishedCompetition/FinishedCompetition'
import CompetitionDetail from "./pages/CompetitionDetail/CompetitionDetail";
import WaitingToBeDrawn from './pages/WaitingToBeDrawn/WaitingToBeDrawn'
import WaitingCompetitionDetails from "./pages/WaitingCompetitionDetails/WaitingCompetitionDetails"; 
import LanguageTicker from './components/LanguageTicker/LanguageTicker';

import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import './App.css'

function App() {
  return (
    <Router>
      <LanguageTicker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/previous-winners" element={<PreviousWinners />} />
        <Route path="/live-competition" element={<LiveCompetition />} />
        <Route path="/how-to-play" element={<HowTOPlay />} />
        <Route path="/finished-competition" element={<FinishedCompetition />} />
        <Route path="/competition/:id" element={<CompetitionDetail />} />
        <Route path="/waiting-to-be-drawn" element={<WaitingToBeDrawn />} />
        <Route path="/waiting/:id" element={<WaitingCompetitionDetails />} />

        <Route path="/waiting" element={<WaitingCompetitionDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
