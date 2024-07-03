import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/Views/LandingPage/LandingPage';
import SigninModal from '../src/components/SigninSignupModal/SigninModal';
import SignupModal from '../src/components/SigninSignupModal/SignupModal';
import HomePage from './Views/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninModal />} />
          <Route path="/signup" element={<SignupModal />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
