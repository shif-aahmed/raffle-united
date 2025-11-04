import React, { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
import FAQs from './pages/FAQs/FAQs'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Spin from './pages/Spin/Spin'
import Admin from './pages/Admin/Admin'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Reset all common scroll containers
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/spin" element={<Spin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
