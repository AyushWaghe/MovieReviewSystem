import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './Views/LandingPage/landingPage';
import SigninModal from "./components/SignupSigninModal/SigninModal";
import SignupModal from "./components/SignupSigninModal/SignupModal";
// import MovieList from './components/MovieList';

import './App.css';
// import './Views/LandingPage/LandingPage.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninModal />} />
          <Route path="/signup" element={<SignupModal />} />
          {/* <Route path="/movies" element={<MovieList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
