import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandingPage/Landing';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* The Login component is rendered when the /login path is matched */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
